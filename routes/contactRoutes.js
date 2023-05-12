const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get();

router.route("/:id").put();

router.route("/:id").delete();

module.exports = router;
