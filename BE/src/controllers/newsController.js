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

// @desc    Di chuyển dữ liệu bình luận cũ (avatar -> email)
// @route   PUT /api/news/migrate-comments
// @access  Public
exports.migrateComments = asyncHandler(async(req, res) => {
    // Tìm tất cả tin tức có bình luận
    const allNews = await News.find({ 'comments.0': { $exists: true } });
    let updatedCount = 0;

    for (const news of allNews) {
        let needsUpdate = false;

        // Kiểm tra và cập nhật từng bình luận
        if (news.comments && news.comments.length > 0) {
            news.comments.forEach(comment => {
                if (!comment.email && comment.avatar) {
                    // Chuyển đổi avatar thành email nếu có thể
                    comment.email = `${comment.author.replace(/\s+/g, '').toLowerCase()}@example.com`;
                    needsUpdate = true;
                }
            });
        }

        // Lưu lại nếu có thay đổi
        if (needsUpdate) {
            await News.updateOne({ _id: news._id }, { $set: { comments: news.comments } }, { runValidators: false });
            updatedCount++;
        }
    }

    res.status(200).json({
        success: true,
        message: `Đã cập nhật ${updatedCount} tin tức có bình luận cũ`,
    });
});

// @desc    Thêm comment vào tin tức
// @route   POST /api/news/:slug/comments
// @access  Public
exports.addComment = asyncHandler(async(req, res) => {
    // Tìm tin tức theo slug
    const news = await News.findOne({ slug: req.params.slug });

    if (!news) {
        throw new ApiError(404, 'Không tìm thấy tin tức');
    }

    // Đảm bảo request body có trường email
    if (!req.body.email) {
        throw new ApiError(400, 'Email không được bỏ trống');
    }

    // Kiểm tra định dạng email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(req.body.email)) {
        throw new ApiError(400, 'Định dạng email không hợp lệ');
    }

    try {
        // Thêm comment mới bằng cách cập nhật trực tiếp
        const newComment = {
            author: req.body.author,
            email: req.body.email,
            content: req.body.content,
            date: new Date()
        };

        // Sử dụng findOneAndUpdate để thêm comment mới và cập nhật commentCount
        const updatedNews = await News.findOneAndUpdate({ slug: req.params.slug }, {
            $push: { comments: newComment },
            $inc: { commentCount: 1 } // Tăng commentCount lên 1
        }, { new: true, runValidators: false });

        if (!updatedNews) {
            throw new ApiError(404, 'Không thể cập nhật tin tức');
        }

        // Lấy comment mới nhất vừa thêm vào
        const addedComment = updatedNews.comments[updatedNews.comments.length - 1];

        res.status(201).json({
            success: true,
            data: addedComment
        });
    } catch (error) {
        throw new ApiError(400, error.message);
    }
});

// @desc    Đồng bộ lại commentCount cho tất cả bài viết
// @route   PUT /api/news/sync-comment-count
// @access  Public
exports.syncCommentCount = asyncHandler(async(req, res) => {
    const allNews = await News.find({});
    let updatedCount = 0;

    for (const news of allNews) {
        if (news.comments) {
            const correctCount = news.comments.length;

            // Chỉ cập nhật nếu commentCount không chính xác
            if (news.commentCount !== correctCount) {
                await News.updateOne({ _id: news._id }, { $set: { commentCount: correctCount } });
                updatedCount++;
            }
        }
    }

    res.status(200).json({
        success: true,
        message: `Đã đồng bộ commentCount cho ${updatedCount} tin tức`,
    });
});