const express = require("express");
const { AirPlaneController } = require("../../controllers");

const router = express.Router();
console.log("hello form the airplane");

router.post("/create", AirPlaneController.createPlane);

module.exports = router;
