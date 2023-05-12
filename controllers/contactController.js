const getContact = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

const createContact = (req, res) => {
  res.status(200).json({ message: "create contact" });
};

module.exports = { getContact, createContact };
