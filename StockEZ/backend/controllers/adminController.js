const Stock = require("../models/Stock");


// ========================================
// Test Admin Access
// GET /api/admin/test
// ========================================

const adminTest = async (req, res) => {

  try {

    res.status(200).json({
      message: "Welcome Admin",
      admin: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};


// ========================================
// Add New Stock
// POST /api/admin/stocks
// ========================================

const addStock = async (req, res) => {

  try {

    const {
      symbol,
      companyName,
      currentPrice,
      changePercentage,
      sector,
      volume,
    } = req.body;


    // Check duplicate stock
    const existingStock = await Stock.findOne({
      symbol,
    });


    if (existingStock) {

      return res.status(400).json({
        message: "Stock already exists",
      });

    }


    // Create stock
    const stock = await Stock.create({

      symbol: symbol.toUpperCase(),

      companyName,

      currentPrice,

      changePercentage,

      sector,

      volume,

    });


    res.status(201).json({

      message: "Stock added successfully",

      stock,

    });


  } catch (error) {

    console.error(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};


// Export Controllers

module.exports = {

  adminTest,

  addStock,

};