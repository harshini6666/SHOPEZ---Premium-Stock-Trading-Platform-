const express = require("express");

const { protect } = require("../middleware/authMiddleware");

const { adminOnly } = require("../middleware/adminMiddleware");

const {
  adminTest,
  addStock,
} = require("../controllers/adminController");

const router = express.Router();


// ===============================
// Test Admin Access
// GET /api/admin/test
// ===============================

router.get(
  "/test",
  protect,
  adminOnly,
  adminTest
);


// ===============================
// Add New Stock
// POST /api/admin/stocks
// ===============================

router.post(
  "/stocks",
  protect,
  adminOnly,
  addStock
);


module.exports = router;