const express = require("express");
const { AirportController } = require("../../controllers");

const router = express.Router();

router.post("/create", AirportController.createAirport);
router.get("/getById/:id", AirportController.getAirportById);

module.exports = router;
