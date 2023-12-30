const mongoose = require("mongoose");
const { Schema } = mongoose;
 const ProductSchema  = new Schema({
    title:{
        type:Schema.Types.String,
        require:true
    },
    description:{
        type:Schema.Types.String,
        require:true,
    },
    price:{
        type:Schema.Types.Number,
        require:true
    },
    category:{
        type:Schema.Types.String,
        require:true
    },
    rating:{
        type:Schema.Types.Number,
        require:true
    },
    images:[{
        type:Schema.Types.String
    }]
 })

 module.exports = ProductSchema