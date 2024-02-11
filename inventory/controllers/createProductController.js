const createProductService = require("../services/createProductService");
const joi = require("joi");
const createProductController = async (req, res, next) => {
  try {
    const schema = joi.object({
      name: joi.string().required(),
      price: joi.number().required(),
      quantity: joi.number().required(),
      userID: joi.string().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const createdProduct = await createProductService(value);

    res.status(201).json({ message: "Success", product: createdProduct });
  } catch (err) {
    next(err);
  }
};

module.exports = createProductController;
