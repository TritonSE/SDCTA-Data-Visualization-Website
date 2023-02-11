const mongoose = require('mongoose');

const dataSchema = new mongoose.model("Category", 
    new mongoose.Schema({
        name: {
            required: true,
            unique: true,
            type: String
        },
        visualizations: {
            required: true,
            type: Array
        }
    })
)

module.exports = dataSchema