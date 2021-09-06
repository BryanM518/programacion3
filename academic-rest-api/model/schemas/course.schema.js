/** packages */
const mongoose = require("mongoose")


/** Schema creation */
const courseSchema = new mongoose.Schema({
    course:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    }
})

/** schema exportation */
module.exports = courseSchema