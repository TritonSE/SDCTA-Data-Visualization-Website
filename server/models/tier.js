const mongoose = require('mongoose');

const dataSchema = new mongoose.model("Tier", 
    new mongoose.Schema({
        name: {
            required: true,
            type: String
        },
        level: {
            required: true,
            type: Number
        }
    })
)

module.exports = dataSchema