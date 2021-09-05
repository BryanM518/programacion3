/** packages */
const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")


/** Schema creation */
const productoSchema = new mongoose.Schema({
    id:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    precio:{
        type: "Number",
        required: true
    },
    existencia:{
        type: "Number",
        required: true,
    },
    calificacion:{
        type: "Number",
        required: true
    },
    id_categoria:{
        type: "String",
        required: true
    },
    id_marca:{
        type: "String",
        required: true
    },
    descuento:{
        type: "Number",
        required: true
    }
})

/** schema exportation */
productoSchema.plugin(validator)
module.exports = productoSchema