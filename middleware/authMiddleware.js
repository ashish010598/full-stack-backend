const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) return res.status(401).json({ msg: "Token missing" });
  if (token && token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};
