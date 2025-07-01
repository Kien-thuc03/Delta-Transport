const { News } = require('../models');
const { asyncHandler, ApiError } = require('../utils');

// @desc    Lấy tất cả tin tức (có phân trang)
// @route   GET /api/news
// @access  Public
exports.getNews = asyncHandler(async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    // Lọc theo category và tags nếu có
    const filter = {};
    if (req.query.category) {
        filter.category = req.query.category;
    }
    if (req.query.tag) {
        filter.tags = { $in: [req.query.tag] };
    }

    const news = await News.find(filter)
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit)
        .select('title image date excerpt slug');

    const total = await News.countDocuments(filter);

    res.status(200).json({
        success: true,
        count: news.length,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        data: news
    });
});

// @desc    Lấy chi tiết một tin tức theo slug
// @route   GET /api/news/detail/:slug
// @access  Public
exports.getNewsBySlug = asyncHandler(async(req, res) => {
    const news = await News.findOne({ slug: req.params.slug });

    if (!news) {
        throw new ApiError(404, 'Không tìm thấy tin tức');
    }

    res.status(200).json({
        success: true,
        data: news
    });
});

// @desc    Tạo tin tức mới
// @route   POST /api/news
// @access  Public
exports.createNews = asyncHandler(async(req, res) => {
    const news = await News.create(req.body);

    res.status(201).json({
        success: true,
        data: news
    });
});

// @desc    Cập nhật tin tức
// @route   PUT /api/news/:id
// @access  Public
exports.updateNews = asyncHandler(async(req, res) => {
    let news = await News.findById(req.params.id);

    if (!news) {
        throw new ApiError(404, 'Không tìm thấy tin tức');
    }

    news = await News.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: news
    });
});

// @desc    Xóa tin tức
// @route   DELETE /api/news/:id
// @access  Public
exports.deleteNews = asyncHandler(async(req, res) => {
    const news = await News.findById(req.params.id);

    if (!news) {
        throw new ApiError(404, 'Không tìm thấy tin tức');
    }

    await news.deleteOne();

    res.status(200).json({
        success: true,
        data: {}
    });
});

// @desc    Lấy tất cả categories
// @route   GET /api/news/categories
// @access  Public
exports.getCategories = asyncHandler(async(req, res) => {
    const categories = await News.distinct('category');

    res.status(200).json({
        success: true,
        count: categories.length,
        data: categories
    });
});

// @desc    Lấy tất cả tags
// @route   GET /api/news/tags
// @access  Public
exports.getTags = asyncHandler(async(req, res) => {
    const tags = await News.distinct('tags');

    res.status(200).json({
        success: true,
        count: tags.length,
        data: tags
    });
});

// @desc    Thêm comment vào tin tức
// @route   POST /api/news/:id/comments
// @access  Public
exports.addComment = asyncHandler(async(req, res) => {
    const news = await News.findById(req.params.id);

    if (!news) {
        throw new ApiError(404, 'Không tìm thấy tin tức');
    }

    news.comments.push(req.body);
    await news.save();

    res.status(201).json({
        success: true,
        data: news.comments[news.comments.length - 1]
    });
});