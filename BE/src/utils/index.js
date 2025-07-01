const formatResponse = (data, message = 'Success', status = 200) => {
    return {
        status,
        message,
        data,
    };
};

const logError = (error) => {
    console.error('Error:', error);
};

class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

module.exports = {
    formatResponse,
    logError,
    ApiError,
    asyncHandler
};