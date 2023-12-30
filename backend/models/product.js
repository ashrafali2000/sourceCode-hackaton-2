const mongoose = require("mongoose");
const ProductSchema = require("../schemas/product");

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product