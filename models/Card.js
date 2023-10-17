const { Schema } = require('mongoose')

const cardSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        apr: {
            type: Number
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
        anualFee: {
            type: Number
        },
        cardDetails: [{
            type: String
    }]
        
    },
    { timestamps: true }
)
module.exports = cardSchema
