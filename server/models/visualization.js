const mongoose = require("mongoose");

const dataSchema = new mongoose.model("Visualization", 
    new mongoose.Schema({
        title: {
            required: true,
            unique: true,
            type: String
        },
        analysis: {
            required: true,
            type: String
        },
        link: {
            required: true,
            unique: true,
            type: String
        },
        csvLink: {
            required: true,
            unique: true,
            type: String
        }
    })
)

module.exports = dataSchema;
