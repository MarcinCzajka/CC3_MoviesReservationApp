const mongoose = require('mongoose');
const Joi = require('joi');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ScreeningSchema = new mongoose.Schema({
    screeningRoomId: {
        type: String,
        required: true
    },
    movieId: {
        type: String,
        required: true
    },
    date: {
        type: date,
        required: true
    }
});

const Screening = mongoose.model('Screening', ScreeningSchema);

function validateScreening(screening) {
    const schema = {
        screeningRoomId: Joi.string().required(),
        movieId: Joi.string().required(),
        date: Joi.date().min('now').required()
    };

    return Joi.validate(screening, schema)
}

module.exports = {
    Screening: Screening,
    validateScreening: validateScreening
}