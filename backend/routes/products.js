const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  findProduct,
} = require("../controllers/products");
const userToken = require("../middleware/userToken");
// get all Products Api
router.get("/", userToken, async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

// Dynamic routing (search any product)
router.get("/:p", async (req, res) => {
  const searchProduct = req.params.p;
  const dynamicProduct = await findProduct(searchProduct);
  res.send(dynamicProduct);
});

// post product method or controller
router.post("/", async (req, res) => {
  try {
    const { title, description, price, category, rating, images } = req.body;
    const response = await addProduct({
      title,
      description,
      price,
      rating,
      category,
      images,
    });
    res.status(200).send({ status: 200, message: response });
  } catch (err) {
    res.status(400).send({ status: 400, message: err.message });
  }
});

module.exports = router;
