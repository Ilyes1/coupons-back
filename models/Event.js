const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    event_date: {
        type: Date,
        required: true
    },
    on_sale_date: {
        type: Date,
        required: true
    },
    code_type: {
        type: String,
        required: true
    }
})

const Event = mongoose.model('Events', eventSchema)

module.exports = Event