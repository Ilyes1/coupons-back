const mongoose = require('mongoose')

const couponSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
})

const Coupon = mongoose.model('Coupons', couponSchema)

module.exports = Coupon