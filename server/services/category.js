const Model = require('../models/category');

module.exports = {
    getCategoryByName: async function getCategoryByName(name) {
        try{
            const data = await Model.find({name: name});
            return data[0];
        }
        catch(error){
            res.status(500).json({message: error.message})
            return {};
        }
    }
};