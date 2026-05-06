const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,   // ✅ correct
    { expiresIn: "1d" }
  );
};

module.exports = generateToken;