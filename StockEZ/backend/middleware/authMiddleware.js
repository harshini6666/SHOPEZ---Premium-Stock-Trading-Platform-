const jwt = require("jsonwebtoken");
const User = require("../models/User");


const protect = async (req, res, next) => {
  let token;

  try {

    // Check Authorization header
    const authHeader = req.headers.authorization;


    if (
      authHeader &&
      authHeader.startsWith("Bearer ")
    ) {

      // Extract token
      token = authHeader.split(" ")[1];


      // Verify JWT
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );


      // Get user from database
      req.user = await User.findById(decoded.id)
        .select("-password");


      return next();
    }


    return res.status(401).json({
      message: "Not authorized, token missing",
    });


  } catch (error) {

    console.error(error);

    return res.status(401).json({
      message: "Not authorized, invalid token",
    });

  }
};


module.exports = {
  protect,
};