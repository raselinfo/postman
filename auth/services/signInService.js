const Jwt = require("../utils/Jwt");
const Password = require("../utils/Password");
const prisma = require("../utils/prisma");
const signInService = async ({ email, password }) => {
  const error = new Error("Something went wrong!");
  if (!email || !password) {
    error.message = "Email and Password is required!";
    error.status = 400;
    throw error
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!existingUser) {
    error.message = "User not found!";
    error.status=404;
    throw error
  }

  const isValidPassword =await Password.verify(password, existingUser.password);
  if (!isValidPassword) {
    error.message = "Password is incorrect!";
    error.status=401;
    throw error
  }

  const token = Jwt.signAccessToken({
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
  });

  

  return token;
};

module.exports = signInService;
