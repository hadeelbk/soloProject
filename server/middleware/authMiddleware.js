const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};


/* const oldSecret = process.env.OLD_JWT_SECRET;
const currentSecret = process.env.JWT_SECRET;

jwt.verify(token, currentSecret, (err, decoded) => {
  if (err && oldSecret) {
    // Try verifying with the old secret
    jwt.verify(token, oldSecret, (err, decodedOld) => {
      if (decodedOld) {
        console.log("Token verified with old secret.");
      } else {
        return res.status(401).json({ error: "Invalid token." });
      }
    });
  } else if (!err) {
    console.log("Token verified with current secret.");
  } else {
    return res.status(401).json({ error: "Invalid token." });
  }
}); */
module.exports = authMiddleware;
