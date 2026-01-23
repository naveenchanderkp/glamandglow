// import User from "../models/user.model.js";
const User = require("../models/user.model");
// import { generateToken } from "../utils/jwt.js";
const { generateToken } = require("../utils/jwt");
// import bcrypt from "bcryptjs";
const bcrypt = require('bcryptjs');

const register = async ({ email, password }) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword
  });

  return user;
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken(user._id);
  return { token };
};

const getUser = async () => {
  const user = await User.find();
  return user;
}

// export default { register, login, getUser };
module.exports = { register, login, getUser };