const { News } = require('../models');
const { asyncHandler } = require('../utils');

// @desc    Tìm kiếm tin tức theo từ khóa
// @route   GET /api/search
// @access  Public
exports.searchNews = asyncHandler(async(req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.status(200).json({
            success: true,
            count: 0,
            data: []
        });
    }

    // Tìm kiếm theo nhiều trường với regex
    const regex = new RegExp(q, 'i');
    const results = await News.find({
        $or: [
            { title: regex },
            { excerpt: regex },
            { tags: regex },
            { category: regex }
        ]
    }).select('title image date excerpt slug');

    res.status(200).json({
        success: true,
        count: results.length,
        data: results
    });
});

// @desc    Lấy các tags phổ biến
// @route   GET /api/search/popular-tags
// @access  Public
exports.getPopularTags = asyncHandler(async(req, res) => {
    // Lấy tất cả tags, đếm số lần xuất hiện và sắp xếp
    const popularTags = await News.aggregate([
        { $unwind: '$tags' },
        { $group: { _id: '$tags', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 }
    ]);

    const tags = popularTags.map(tag => ({
        name: tag._id,
        count: tag.count
    }));

    res.status(200).json({
        success: true,
        count: tags.length,
        data: tags
    });
});