const express = require("express");

const { InfoController } = require("../../controllers");
const airplaneRoute = require("./airplane-route");

const router = express.Router();
router.use("/airplane", airplaneRoute);
router.get("/info", InfoController.info);

module.exports = router;
