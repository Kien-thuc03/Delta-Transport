const app = require('./app');
const connectDB = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Xử lý lỗi không được bắt
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message, err.stack);
    process.exit(1);
});

// Kết nối database
connectDB();

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