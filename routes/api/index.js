const router = require("express").Router();
const noteRoutes = require("./note");
const newsletterRoutes = require("./newsletter")
const cartRoutes = require("./cart")
// Note routes

router.use("/notes", noteRoutes);
router.use("/newsletter", newsletterRoutes)
router.use("/userCart", cartRoutes)
module.exports = router;