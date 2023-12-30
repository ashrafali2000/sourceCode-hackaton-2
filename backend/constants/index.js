require('dotenv').config()
const jwtSecretKey = process.env.SECERETEKEY;
const password = process.env.PASSWORD;

module.exports = {jwtSecretKey, password}