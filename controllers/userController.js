const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("all fields are mandatory !");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("user already registered!");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  res.status(200).json();
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json(contacts);
});

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(contacts);
});

module.exports = { registerUser, loginUser, currentUser };
