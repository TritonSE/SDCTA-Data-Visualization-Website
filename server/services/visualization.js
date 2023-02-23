const Model = require('../models/visualization');

module.exports = {
    getCategoryByName: async function getVisualizationByTitle(title) {
        try{
            const data = await Model.find({title: title});
            return data[0];
        }
        catch(error){
            res.status(500).json({message: error.message})
            return {};
        }
    }
};