const mongoose = require('mongoose');

const RecruitmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Tiêu đề công việc không được bỏ trống'],
        trim: true
    },
    location: {
        type: String,
        required: [true, 'Địa điểm làm việc không được bỏ trống'],
        trim: true
    },
    type: {
        type: String,
        required: [true, 'Loại hình công việc không được bỏ trống'],
        enum: ['Toàn thời gian', 'Bán thời gian', 'Thời vụ', 'Thực tập'],
        default: 'Toàn thời gian'
    },
    deadline: {
        type: Date,
        required: [true, 'Hạn nộp hồ sơ không được bỏ trống']
    },
    description: {
        type: String,
        required: [true, 'Mô tả công việc không được bỏ trống']
    },
    requirements: {
        type: [String],
        required: [true, 'Yêu cầu công việc không được bỏ trống'],
        validate: {
            validator: function(v) {
                return v.length > 0;
            },
            message: 'Yêu cầu công việc không được bỏ trống'
        }
    },
    benefits: {
        type: [String],
        required: [true, 'Quyền lợi không được bỏ trống'],
        validate: {
            validator: function(v) {
                return v.length > 0;
            },
            message: 'Quyền lợi không được bỏ trống'
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
    },
    deletedAt: {
        type: Date,
    }
}, { timestamps: true });

module.exports = mongoose.model('Recruitment', RecruitmentSchema);