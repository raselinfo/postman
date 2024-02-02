const axios = require("axios");
const authUrl = process.env.AUTH_URL;

const authMiddleware = async (req, res, next) => {
  const error = new Error("Access denied. No token provided.");
  error.status = 401;
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw error;
    }
    const token = authorization?.split(" ")[1];
    if (!token) {
      throw error;
    }

    const response = await axios.post(
      authUrl,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response>>> ", response);
    //    check status code
    if (response?.status !== 200) {
      throw error;
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;
