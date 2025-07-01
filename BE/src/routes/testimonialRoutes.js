const express = require('express');
const { testimonialController } = require('../controllers');

const router = express.Router();

router.route('/')
    .get(testimonialController.getTestimonials)
    .post(testimonialController.createTestimonial);

router.route('/:id')
    .get(testimonialController.getTestimonial)
    .put(testimonialController.updateTestimonial)
    .delete(testimonialController.deleteTestimonial);

module.exports = router;