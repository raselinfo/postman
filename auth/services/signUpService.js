const prisma = require("../utils/prisma");
const Password = require("../utils/Password");

const signUpService = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error("Name, Email and Password is required!");
  }
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });


  if (existingUser) {
    const error=new Error("Email already exists!");
    error.statusCode=409;
    throw error
  }
  const hasedPassword =await Password.hash(password);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hasedPassword,
    },
  });
  if (!user) {
    throw new Error("User not created!");
  }

  return {
    name: user.name,
    email: user.email,
  };
};

module.exports = signUpService;
