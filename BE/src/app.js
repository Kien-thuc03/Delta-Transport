const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const swaggerDocs = require('./utils/swagger');

const app = express();

// CORS options
const corsOptions = {
    origin: process.env.CLIENT_URL || '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Tạo đường dẫn tĩnh cho uploads
app.use('/uploads', express.static('public/uploads'));

// API routes
app.use('/api', routes);

// Swagger documentation setup
swaggerDocs(app, process.env.PORT || 3000);

// Error handling middleware
app.use(errorHandler);

// 404 Route
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `Cannot find ${req.originalUrl} on this server`
    });
});

module.exports = app;