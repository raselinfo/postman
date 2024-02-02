const signUpService = require("../services/signUpService");
const signUpController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await signUpService({ name, email, password });

    if (!user) {
      const error = new Error("User not created!");
      error.status = 500;
      throw error
    }

    res.status(201).json({
      message: "User created successfully",
      links: {
        signIn: "${BASE_URL}/api/v1/signin",
      },
    });
  } catch (err) {
    const error = new Error(err.message);
    error.status = err.status;

    next(error);
  }
};

module.exports = signUpController;
