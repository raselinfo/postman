const prisma = require("../utils/prisma");
const Password = require("../utils/Password");

const signUpService = async ({ name, email, password }) => {
  const error=new Error("Something went wrong!");
  if (!name || !email || !password) {
    error.message="Name, Email and Password is required!"
    error.status=400;
    throw error
  }
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });


  if (existingUser) {
    error.message="Email already exists!"
    error.status=409;
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
    error.message="User not created!"
    error.status=500;
    throw error
  }

  return {
    name: user.name,
    email: user.email,
  };
};

module.exports = signUpService;
