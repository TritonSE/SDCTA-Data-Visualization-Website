const Model = require('../models/tier');

export async function getTier(tier) {
    //Get by ID Method
    try{
        const data = await Model.find({level: tier});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}