const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Delta Transport API',
            version: '1.0.0',
            description: 'API Documentation cho ứng dụng Delta Transport',
        },
        servers: [{
            url: 'http://localhost:3000',
            description: 'Development server'
        }]
    },
    apis: [
        path.resolve(__dirname, '../models/schemas.js'),
        path.resolve(__dirname, '../routes/*.js')
    ],
};

const specs = swaggerJsdoc(options);

module.exports = (app, port) => {
    // Route to access API documentation
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
        explorer: true,
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: "Delta Transport API Documentation"
    }));

    // Log API documentation URL
    console.log(`API docs sẵn sàng tại: http://localhost:${port}/api-docs`);
};