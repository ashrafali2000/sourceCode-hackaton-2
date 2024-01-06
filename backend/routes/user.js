const express = require("express");
const router = express.Router();
const { createUser, loginUser, getAllUser } = require("../controllers/user");
const userToken = require("../middleware/userToken");
const Joi = require("joi");

// JOI Schema
const joiUSerSchema = Joi.object({
  firstName: Joi.string().required().min(5),
  lastName: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  password: Joi.string().min(6).required(),
});
// get All User
router.get("/", userToken, async (req, res) => {
  try {
    const users = await getAllUser();
    return res.send({ message: users });
  } catch (err) {
    return res.send({ message: err });
  }
});
// user CreateUser Controller
router.post("/signup", async (req, res) => {
  try {
    // await joiUSerSchema.validateAsync(req.body);
    const { name, email, password } = req.body;
    const response = await createUser({ name, email, password });
    return res.status(200).send({ status: 200, message: response });
  } catch (err) {
    return res.status(400).send({ status: 400, message: err.message });
  }
});

// user LoginUser Controller
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await loginUser({ email, password });
    return res.status(200).send({ status: 200, user: response });
  } catch (err) {
    return res.status(400).send({ status: 400, message: err.message });
  }
});
module.exports = router;
