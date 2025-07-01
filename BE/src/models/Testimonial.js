const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tên khách hàng không được bỏ trống'],
        trim: true
    },
    avatar: {
        type: String,
        default: 'https://randomuser.me/api/portraits/lego/1.jpg'
    },
    content: {
        type: String,
        required: [true, 'Nội dung đánh giá không được bỏ trống'],
        trim: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);