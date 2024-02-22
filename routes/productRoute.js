const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");

/// CREATE NEW PRODUCTS

router.post("/", createProduct);

/// GET ALL PRODUCT

router.get("/", getAllProducts);

/// GET PRODUCT BY ID

router.get("/:id", getProduct);

/// UPDATE PRODUCT BY ID

router.put("/:id", updateProduct);

/// DELETE PRODUCT BY ID

router.delete("/:id", deleteProduct);

module.exports = router;
