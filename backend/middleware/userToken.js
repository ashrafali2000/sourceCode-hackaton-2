const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../constants");

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // console.log(authorization)
    const token = authorization && authorization.split(" ")[1];
    // console.log(token)
    jwt.verify(token, jwtSecretKey, function (err, decoded) {
      if (err) {
        return res.status(401).send({ message: "User Nahi hai", err });
      }
      return next();
    });
  } catch (err) {
    return res.status(401).send({ err });
  }
};
module.exports = verifyToken;

// For Token verify from FrontEnd
// fetch("http://localhost:8000/products", {
//     headers:{"authorization":"Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTVlZjExMDZhNmFmYjUyYjlmZmVkYjMiLCJlbWFpbCI6ImFsaTQyODIyNzFAZ21haWwuY29tIiwiaWF0IjoxNzAwNzI5NDcxLCJleHAiOjE3MDA3MzMwNzF9.1Kb6G3dsv2WLtH5tAHWjG6EkqG2Ns86jbKYWRJOkNDI"}
// }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
