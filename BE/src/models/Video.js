const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Tiêu đề video không được bỏ trống'],
        trim: true
    },
    url: {
        type: String,
        required: [true, 'URL video không được bỏ trống'],
        validate: {
            validator: function(v) {
                return /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}$/.test(v);
            },
            message: props => `${props.value} không phải là URL Youtube hợp lệ!`
        }
    },
    description: {
        type: String,
        trim: true
    },
    thumbnail: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    featured: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Tự động tạo thumbnail từ URL YouTube nếu không được cung cấp
VideoSchema.pre('save', function(next) {
    if (!this.thumbnail && this.url) {
        // Lấy ID video từ URL YouTube
        let videoId = '';
        const urlParts = this.url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (urlParts[2]) {
            const idWithParams = urlParts[2].split(/[^0-9a-z_-]/i);
            videoId = idWithParams[0];
        }
        if (videoId) {
            this.thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
    }
    next();
});

module.exports = mongoose.model('Video', VideoSchema);