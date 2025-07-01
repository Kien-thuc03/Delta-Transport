const { Recruitment } = require('../models');
const { asyncHandler, ApiError } = require('../utils');

// @desc    Lấy tất cả tin tuyển dụng
// @route   GET /api/recruitment
// @access  Public
exports.getRecruitments = asyncHandler(async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Lọc theo location nếu có
    const filter = { isActive: true };
    if (req.query.location) {
        filter.location = req.query.location;
    }
    if (req.query.type) {
        filter.type = req.query.type;
    }

    // Chỉ lấy các tin tuyển dụng còn hạn
    filter.deadline = { $gte: new Date() };

    const recruitments = await Recruitment.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

    const total = await Recruitment.countDocuments(filter);

    res.status(200).json({
        success: true,
        count: recruitments.length,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        data: recruitments
    });
});

// @desc    Lấy chi tiết tin tuyển dụng theo ID
// @route   GET /api/recruitment/:id
// @access  Public
exports.getRecruitmentById = asyncHandler(async(req, res) => {
    const recruitment = await Recruitment.findOne({
        _id: req.params.id,
        isActive: true
    });

    if (!recruitment) {
        throw new ApiError(404, 'Không tìm thấy tin tuyển dụng');
    }

    res.status(200).json({
        success: true,
        data: recruitment
    });
});

// @desc    Tạo tin tuyển dụng mới
// @route   POST /api/recruitment
// @access  Public
exports.createRecruitment = asyncHandler(async(req, res) => {
    const recruitment = await Recruitment.create(req.body);

    res.status(201).json({
        success: true,
        data: recruitment
    });
});

// @desc    Cập nhật tin tuyển dụng
// @route   PUT /api/recruitment/:id
// @access  Public
exports.updateRecruitment = asyncHandler(async(req, res) => {
    let recruitment = await Recruitment.findById(req.params.id);

    if (!recruitment) {
        throw new ApiError(404, 'Không tìm thấy tin tuyển dụng');
    }

    recruitment = await Recruitment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: recruitment
    });
});

// @desc    Xóa tin tuyển dụng
// @route   DELETE /api/recruitment/:id
// @access  Public
exports.deleteRecruitment = asyncHandler(async(req, res) => {
    const recruitment = await Recruitment.findById(req.params.id);

    if (!recruitment) {
        throw new ApiError(404, 'Không tìm thấy tin tuyển dụng');
    }

    await recruitment.deleteOne();

    res.status(200).json({
        success: true,
        data: {}
    });
});

// @desc    Lấy các địa điểm làm việc
// @route   GET /api/recruitment/locations
// @access  Public
exports.getLocations = asyncHandler(async(req, res) => {
    const locations = await Recruitment.distinct('location', { isActive: true });

    res.status(200).json({
        success: true,
        count: locations.length,
        data: locations
    });
});