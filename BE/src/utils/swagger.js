const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Delta Transport API',
            version: '1.0.0',
            description: 'API Documentation cho ứng dụng Delta Transport',
        }
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app, port) => {
    // Route to access API documentation
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    // Log API documentation URL
    console.log(`API docs sẵn sàng tại: http://localhost:${port}/api-docs`);
};