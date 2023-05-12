const express = require("express");
const router = express.Router();
const getContacts = require("../controllers/contactController");
const createContact = require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

router.route("/").delete((req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = router;
