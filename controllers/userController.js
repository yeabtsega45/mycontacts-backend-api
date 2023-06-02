const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json(contacts);
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json(contacts);
});

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(contacts);
});

module.exports = { registerUser, loginUser, currentUser };
