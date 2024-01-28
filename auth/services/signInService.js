const Jwt = require("../utils/Jwt");
const Password = require("../utils/Password");
const prisma = require("../utils/prisma");
const signInService = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and Password is required!");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!existingUser) {
    const error=new Error("Email not found!");
    error.statusCode=404;
    throw error
  }

  const isValidPassword =await Password.verify(password, existingUser.password);
  if (!isValidPassword) {
    throw new Error("Password is incorrect!");
  }

  const token = Jwt.signAccessToken({
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
  });

  

  return token;
};

module.exports = signInService;
