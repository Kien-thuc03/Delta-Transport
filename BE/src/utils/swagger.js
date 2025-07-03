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
            contact: {
                name: 'Delta Transport Team',
                email: 'support@deltatransport.com'
            }
        },
        servers: [{
            url: 'http://localhost:3000',
            description: 'Development server'
        }],
        tags: [{
                name: 'Recruitment',
                description: 'API quản lý tuyển dụng - Các endpoint liên quan đến việc quản lý tin tuyển dụng, vị trí công việc'
            },
            {
                name: 'News',
                description: 'API quản lý tin tức - Các endpoint liên quan đến bài viết, tin tức, bình luận'
            },
            {
                name: 'Testimonials',
                description: 'API quản lý đánh giá khách hàng - Các endpoint liên quan đến phản hồi, đánh giá từ khách hàng'
            },
            {
                name: 'Search',
                description: 'API tìm kiếm - Các endpoint liên quan đến chức năng tìm kiếm nội dung'
            },
            {
                name: 'System',
                description: 'API hệ thống - Các endpoint liên quan đến trạng thái và quản lý hệ thống'
            }
        ]
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
        customSiteTitle: "Delta Transport API Documentation",
        customfavIcon: '/favicon.ico'
    }));

    // Log API documentation URL
    console.log(`API docs sẵn sàng tại: http://localhost:${port}/api-docs`);
};