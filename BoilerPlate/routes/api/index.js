const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
// Book routes

router.use("/userCart", bookRoutes)

router.use((req, res) =>
res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
