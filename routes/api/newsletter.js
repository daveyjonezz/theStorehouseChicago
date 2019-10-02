const router = require("express").Router();
const newsletterController = require("../../controllers/newsletterController");

// Matches with "/api/notes"
console.log("routes")
router.route("/")
  .post(newsletterController.newSubscription);

module.exports = router;