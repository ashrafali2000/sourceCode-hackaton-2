const mongoose = require("mongoose");
const { Schema } = mongoose;

 const UserSchema  = new Schema({
   name:{
        type:Schema.Types.String,
        required:true
    },
    email:{
        type:Schema.Types.String,
        required:true,
        unique:true
    },
    password:{
        type:Schema.Types.String,
        required:true,
    },
    images: {
        type: String,
    }
 })

 module.exports = UserSchema