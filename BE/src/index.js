const app = require('./app');
const config = require('./config/database');
const mongoose = require('mongoose');

const PORT = config.port;

// Xử lý lỗi không được bắt
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message, err.stack);
    process.exit(1);
});

// Kết nối database
mongoose.connect(config.mongoose.url, config.mongoose.options);

// Khởi động server
const server = app.listen(PORT, () => {
    console.log(`Server đang chạy ở port ${PORT} trong môi trường ${process.env.NODE_ENV || 'development'}`);
});

// Xử lý rejection không được bắt
process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    // Đóng server một cách gracefully
    server.close(() => {
        process.exit(1);
    });
});