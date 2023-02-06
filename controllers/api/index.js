const router = require("express").Router();
// const dashRoutes = require("./dashRoutes");
const userRoutes = require("./userRoutes");

// router.use("/dashboard", dashRoutes);
router.use("/users", userRoutes);

module.exports = router;
