const prisma = require("../utils/prisma");
const Jwt = require("../utils/Jwt");
const checkPointService = ({ token }) => {
  const error=new Error("Something went wrong!");
  if (!token) {
    error.message="Access denied. No token provided."
    error.status=401;
    throw error
  }

  const decoded = Jwt.verifyAccessToken(token);
  if (!decoded) {
    error.message="Invalid token!"
    error.status=401;
    throw error
  }
  const user = prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!user) {
    error.message="User not found!"
    error.status=404;
    throw error
  }
  return user;
};

module.exports = checkPointService;
