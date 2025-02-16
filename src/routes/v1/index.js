const express = require("express");

const { InfoController } = require("../../controllers");
const airplaneRoute = require("./airplane-route");
const cityRoutes = require("./city-route");
const { AirPlaneMiddleware } = require("../../middlewares");

const router = express.Router();
router.use(
  "/airplane",
  AirPlaneMiddleware.validateCreateRequest,
  airplaneRoute
);
router.get("/info", InfoController.info);
router.use("/city", cityRoutes);

module.exports = router;
