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
    email: {
        type: String,
        required: [true, 'Email không được bỏ trống'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'Nội dung đánh giá không được bỏ trống'],
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);