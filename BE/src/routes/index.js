const express = require('express');
const newsRoutes = require('./newsRoutes');
const testimonialRoutes = require('./testimonialRoutes');
const searchRoutes = require('./searchRoutes');
const recruitmentRoutes = require('./recruitmentRoutes');
const videoRoutes = require('./videoRoutes');

const router = express.Router();

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
router.use('/videos', videoRoutes);

module.exports = router;