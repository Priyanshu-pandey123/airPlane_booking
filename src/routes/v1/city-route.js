const express = require("express");
const { CityController } = require("../../controllers");
const router = express.Router();

router.post("/create", CityController.createCity);

module.exports = router;
