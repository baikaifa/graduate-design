const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const ThisTime = new Schema({
    date: {
        type: String,
        required:true
    }
})
module.exports = User = mongoose.model("thisTime", ThisTime)