const { Testimonial } = require('../models');
const { asyncHandler, ApiError } = require('../utils');

// @desc    Lấy tất cả đánh giá khách hàng
// @route   GET /api/testimonials
// @access  Public
exports.getTestimonials = asyncHandler(async(req, res) => {

    const testimonials = await Testimonial.find({ isActive: true })
        .sort({ createdAt: -1 });

    const total = await Testimonial.countDocuments({ isActive: true });

    res.status(200).json({
        success: true,
        count: testimonials.length,
        data: testimonials
    });
});

// @desc    Lấy một đánh giá theo ID
// @route   GET /api/testimonials/:id
// @access  Public
exports.getTestimonial = asyncHandler(async(req, res) => {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
        throw new ApiError(404, 'Không tìm thấy đánh giá');
    }

    res.status(200).json({
        success: true,
        data: testimonial
    });
});

// @desc    Tạo đánh giá mới
// @route   POST /api/testimonials
// @access  Public
exports.createTestimonial = asyncHandler(async(req, res) => {
    const testimonial = await Testimonial.create(req.body);

    res.status(201).json({
        success: true,
        data: testimonial
    });
});

// @desc    Cập nhật đánh giá
// @route   PUT /api/testimonials/:id
// @access  Public
exports.updateTestimonial = asyncHandler(async(req, res) => {
    let testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
        throw new ApiError(404, 'Không tìm thấy đánh giá');
    }

    testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: testimonial
    });
});

// @desc    Xóa đánh giá
// @route   DELETE /api/testimonials/:id
// @access  Public
exports.deleteTestimonial = asyncHandler(async(req, res) => {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
        throw new ApiError(404, 'Không tìm thấy đánh giá');
    }

    await testimonial.deleteOne();

    res.status(200).json({
        success: true,
        data: {}
    });
});