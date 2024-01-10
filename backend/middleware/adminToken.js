const jwt = require("jsonwebtoken");
// const { jwtSecretKey } = require("../constants");

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    const token = authorization && authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
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
