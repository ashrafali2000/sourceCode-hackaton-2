const mongoose = require("mongoose");
const { Schema } = mongoose;

 const UserSchema  = new Schema({
    firstName:{
        type:Schema.Types.String,
        required:true
    },
    lastName:{
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
    }
 })

 module.exports = UserSchema