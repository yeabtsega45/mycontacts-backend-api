const getContact = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

module.exports = { getContact };
