const router = require("express").Router();
const usersApiRoutes = require("./usersApiRoutes");

router.use("/users", usersApiRoutes);

module.exports = router;