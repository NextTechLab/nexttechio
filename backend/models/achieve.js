const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Schema
const AchieveSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    description : {
        type : String,
        required : true
    }
});

module.exports = Achieve = mongoose.model('achieve', AchieveSchema);