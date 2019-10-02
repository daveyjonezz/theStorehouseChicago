const router = require("express").Router();
const noteRoutes = require("./note");
const newsletterRoutes = require("./newsletter")
// Note routes

router.use("/notes", noteRoutes);
router.use("/newsletter", newsletterRoutes)

module.exports = router;
