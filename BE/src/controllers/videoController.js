const { Video } = require('../models');
const { asyncHandler, ApiError } = require('../utils');

// @desc    Lấy tất cả video
// @route   GET /api/videos
// @access  Public
exports.getVideos = asyncHandler(async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    // Nếu có featured query param, lọc theo featured
    const filter = { isActive: true };
    if (req.query.featured === 'true') {
        filter.featured = true;
    }

    const videos = await Video.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

    const total = await Video.countDocuments(filter);

    res.status(200).json({
        success: true,
        count: videos.length,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        data: videos
    });
});

// @desc    Lấy chi tiết video theo ID
// @route   GET /api/videos/:id
// @access  Public
exports.getVideoById = asyncHandler(async(req, res) => {
    const video = await Video.findOne({
        _id: req.params.id,
        isActive: true
    });

    if (!video) {
        throw new ApiError(404, 'Không tìm thấy video');
    }

    res.status(200).json({
        success: true,
        data: video
    });
});

// @desc    Tạo video mới
// @route   POST /api/videos
// @access  Public
exports.createVideo = asyncHandler(async(req, res) => {
    const video = await Video.create(req.body);

    res.status(201).json({
        success: true,
        data: video
    });
});

// @desc    Cập nhật video
// @route   PUT /api/videos/:id
// @access  Public
exports.updateVideo = asyncHandler(async(req, res) => {
    let video = await Video.findById(req.params.id);

    if (!video) {
        throw new ApiError(404, 'Không tìm thấy video');
    }

    video = await Video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: video
    });
});

// @desc    Xóa video
// @route   DELETE /api/videos/:id
// @access  Public
exports.deleteVideo = asyncHandler(async(req, res) => {
    const video = await Video.findById(req.params.id);

    if (!video) {
        throw new ApiError(404, 'Không tìm thấy video');
    }

    await video.deleteOne();

    res.status(200).json({
        success: true,
        data: {}
    });
});