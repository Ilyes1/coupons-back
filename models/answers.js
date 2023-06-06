const mongoose = require('mongoose')

const answersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    broker_experience: {
        type: Number,
        required: true
    },
    how_did_you_hear: {
        type: String,
        required: true
    },
    refer_by: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
})

const Answers = mongoose.model('Answers', answersSchema)

module.exports = Answers