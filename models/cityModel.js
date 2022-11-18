const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    department : Number,
      city: {
        type: String,
        unique: true,
        index: true
    },
    population : Number,
});

module.exports = mongoose.model("City", citySchema);