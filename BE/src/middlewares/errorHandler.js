const { ApiError } = require('../utils');

// Xử lý lỗi từ MongoDB
const handleCastErrorDB = err => {
    const message = `Giá trị không hợp lệ: ${err.path}`;
    return new ApiError(400, message);
};

const handleDuplicateFieldsDB = err => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Giá trị đã tồn tại: ${value}. Vui lòng sử dụng giá trị khác!`;
    return new ApiError(400, message);
};

const handleValidationErrorDB = err => {
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Dữ liệu không hợp lệ. ${errors.join('. ')}`;
    return new ApiError(400, message);
};

const handleJWTError = () => new ApiError(401, 'Token không hợp lệ. Vui lòng đăng nhập lại!');

const handleJWTExpiredError = () => new ApiError(401, 'Token đã hết hạn. Vui lòng đăng nhập lại!');

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
};

const sendErrorProd = (err, res) => {
    // Lỗi hoạt động, gửi thông báo đến client
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }
    // Lỗi lập trình hoặc lỗi không xác định, không gửi chi tiết
    else {
        // Log lỗi
        console.error('ERROR 💥', err);

        // Gửi thông báo chung
        res.status(500).json({
            status: 'error',
            message: 'Có lỗi xảy ra!'
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
        let error = {...err };
        error.message = err.message;

        if (error.name === 'CastError') error = handleCastErrorDB(error);
        if (error.code === 11000) error = handleDuplicateFieldsDB(error);
        if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
        if (error.name === 'JsonWebTokenError') error = handleJWTError();
        if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

        sendErrorProd(error, res);
    }
};