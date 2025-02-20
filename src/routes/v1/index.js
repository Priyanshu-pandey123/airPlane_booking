const express = require("express");

const { InfoController } = require("../../controllers");
const airportRoute = require("./airport-routes");
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
router.use("/airport", airportRoute);

module.exports = router;
