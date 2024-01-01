require('dotenv').config()
const jwtSecretKey = process.env.JWT_SECRET;
const password = process.env.PASSWORD;

module.exports = {jwtSecretKey, password}