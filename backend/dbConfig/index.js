const mongoose = require("mongoose");
require('dotenv').config()
const password = process.env.PASSWORD
 mongoose.connect(`mongodb+srv://Ashrafali:${password}@ashratech.fbnrqrf.mongodb.net/source-code-hackaton-2?retryWrites=true&w=majority`)
module.exports = mongoose