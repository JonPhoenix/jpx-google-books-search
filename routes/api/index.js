const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("api/books", bookRoutes);

module.exports = router;
