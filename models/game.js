const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Game Blueprint
//NOTE:  this is just placeholder right now -- not sure what this is going to look like
const gameSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    answerKey: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Game", gameSchema)