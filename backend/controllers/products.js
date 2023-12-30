const Product  = require("../models/product");

const addProduct = async(data) => {
    try{
        const product = new Product(data);
        await product.save();
        return "Product added Successfull";
    }
    catch(err){
    return "some thing required";
    }
}

const getAllProducts = async () => {
    try{
        const products = await Product.find();
        return products;
    }catch(err){
        return "some thing wrong";
    }
}
const findProduct = async(searchProduct) => {
  const products = await getAllProducts();
  const allQueryProducts = products.filter(p => p.title.toLowerCase() === searchProduct);
return allQueryProducts;
}
module.exports = { getAllProducts, addProduct, findProduct};