const express = require('express');
const newsRoutes = require('./newsRoutes');
const testimonialRoutes = require('./testimonialRoutes');
const searchRoutes = require('./searchRoutes');
const recruitmentRoutes = require('./recruitmentRoutes');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: System
 *     description: Các API hệ thống
 */

/**
 * @swagger
 * /api/health:
 *   get:
 *     tags:
 *       - System
 *     summary: Kiểm tra trạng thái API
 *     description: Endpoint kiểm tra xem API có đang hoạt động không
 *     responses:
 *       200:
 *         description: API đang hoạt động bình thường
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: API is running
 */
// Health check route
router.get('/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'API is running'
    });
});

// API routes
router.use('/news', newsRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/search', searchRoutes);
router.use('/recruitment', recruitmentRoutes);

module.exports = router;