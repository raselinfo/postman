const router = require("express").Router();

const getAllProductsController = require("../controllers/getAllProductsController");
const getProductByIdController = require("../controllers/getProductByIdController");
const createProductController = require("../controllers/createProductController");
const updateProductController = require("../controllers/updateProductController");
const deleteProductController = require("../controllers/deleteProductController");
const getAllProductsByUserIDController = require("../controllers/getAllProductsByUserIDController");

const authMiddleware = require("../middlewares/auth");

router.get("/products", getAllProductsController);

router.get("/products/:id", getProductByIdController);

router.post("/products", authMiddleware, createProductController);

router.put("/products/:id", authMiddleware, updateProductController);

router.delete("/products/:id",authMiddleware, deleteProductController);

router.get("/products/user/:userId", getAllProductsByUserIDController);

module.exports = router;
