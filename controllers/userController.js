const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("all fields are mandatory !");
  }
  res.status(200).json(contacts);
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json(contacts);
});

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(contacts);
});

module.exports = { registerUser, loginUser, currentUser };
