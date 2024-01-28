const getAllProductsByUserIDService = require("../services/getAllProductsByUserIDService");

const getAllProductsByUserIDController = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const products = await getAllProductsByUserIDService(userId);
    res.status(200).json({ message: "Success", products: products });
  } catch (err) {
    const error = new Error(err.message);
    error.status = err.status || 500;
    next(error);
  }
};

module.exports = getAllProductsByUserIDController;
