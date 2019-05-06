const path = require("path");
const router = require("express").Router();


// If no API routes are hit, send the React app
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;