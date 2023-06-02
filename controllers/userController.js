const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json(contacts);
});

module.exports = registerUser;
