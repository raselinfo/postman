const updatedProductService = require("../services/updatedProductService");

const updateProductController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, price, quantity } = req.body;
    const updatedProduct = await updatedProductService(id, {
      name,
      price,
      quantity,
    });

    res.status(200).json({ message: "Success", product: updatedProduct });
  } catch (err) {
    const error = new Error(err.message);
    error.status = err.status || 500;
    next(error);
  }
};

module.exports = updateProductController;
