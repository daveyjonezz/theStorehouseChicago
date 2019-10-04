const router = require("express").Router();
const userCartController = require("../../controllers/userCartController");
// Matches with "/api/usercart"
router.route("/")
  .get(userCartController.findAll)
  .post(userCartController.create);
router.route("/:id")
  .get(userCartController.findById)
  .put(userCartController.update)
  .delete(userCartController.remove);
module.exports = router;
