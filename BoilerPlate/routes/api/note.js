const router = require("express").Router();
const notesController = require("../../controllers/notesController");

// Matches with "/api/notes"
console.log("routes")
router.route("/")
  .post(notesController.newRecord);

module.exports = router;