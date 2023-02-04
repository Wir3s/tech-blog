const router = require("express").Router();
const dashRoutes = require("./dashRoutes");

router.use("/dashboard", dashRoutes);

module.exports = router;
