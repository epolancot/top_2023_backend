const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        creditGroup: {
            type: String
        },
        apr: {
            type: {
                "Poor-Fair": Number,
                "Good": Number,
                "Great": Number,
            }
        },
        gracePeriod: {
            type: Number
        },
        lateFee: {
            type: Number
        },
        rewards: {
            type: String
        },        
    },
    { timestamps: true }
)

module.exports = mongoose.model('Card', cardSchema);
