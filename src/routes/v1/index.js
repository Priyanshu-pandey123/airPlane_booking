const express = require("express");

const { InfoController } = require("../../controllers");
const airplaneRoute = require("./airplane-route");
const { AirPlaneMiddleware } = require("../../middlewares");

const router = express.Router();
router.use(
  "/airplane",
  AirPlaneMiddleware.validateCreateRequest,
  airplaneRoute
);
router.get("/info", InfoController.info);

module.exports = router;
