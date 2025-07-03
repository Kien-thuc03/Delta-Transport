const mongoose = require('mongoose');

const ContentBlockSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['text', 'image', 'heading', 'list', 'quote', 'divider'],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    metadata: {
        level: { type: Number, min: 1, max: 6 },
        alt: String,
        caption: String,
        style: { type: String, enum: ['italic', 'bold', 'normal'] },
        listType: { type: String, enum: ['ordered', 'unordered'] },
        items: [String],
        align: { type: String, enum: ['left', 'center', 'right'] }
    }
}, { _id: true });

const CommentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Vui lòng nhập đúng định dạng email']
    },
    avatar: {
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Tiêu đề tin tức không được bỏ trống'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'Đường dẫn không được bỏ trống'],
        unique: true,
        lowercase: true
    },
    image: {
        type: String,
        required: [true, 'Hình ảnh không được bỏ trống']
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        default: 'Admin'
    },
    excerpt: {
        type: String,
        required: [true, 'Tóm tắt tin tức không được bỏ trống']
    },
    content: [ContentBlockSchema],
    tags: [String],
    category: String,
    comments: [CommentSchema],
    commentCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Trước khi lưu, tự động cập nhật số lượng bình luận
NewsSchema.pre('save', function(next) {
    if (this.comments) {
        this.commentCount = this.comments.length;
    }
    next();
});

// Tạo slug tự động từ tiêu đề nếu không được cung cấp
NewsSchema.pre('save', function(next) {
    if (!this.slug) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    }
    next();
});

module.exports = mongoose.model('News', NewsSchema);