const checkPointService = require("../services/checkPointService");

const checkpointController = async (req, res, next) => {
  try {
    console.log("Checkpoint controller");
    const token = req?.headers?.authorization?.split(" ")[1];
    const isCheckPointPassed = await checkPointService({ token });

    if (!isCheckPointPassed) {
      const error = new Error("Access denied. No token provided.");
      error.status = 401;
      throw error
    }

    res.status(200).json({ message: "Access granted" });
    console.log("response send from checkpoint controller...");
  } catch (err) {
    const error = new Error(err.message);
    error.status = err.status;

    next(error);
  }
};

module.exports = checkpointController;
