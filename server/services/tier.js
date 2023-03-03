const Model = require("../models/tier");

module.exports = {
  getTier: async function getTier(tier) {
    //Get by ID Method
    try {
      const data = await Model.find({ level: tier });
      return data[0];
    } catch (error) {
      res.status(500).json({ message: error.message });
      return {};
    }
  },
};
