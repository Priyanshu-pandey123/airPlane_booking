const { AirPlaneService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
console.log(AirPlaneService, "airplane service");

async function createPlane(req, res) {
  console.log(req.body, "from airplane");
  try {
    const airplane = await AirPlaneService.createAirPlane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    console.log(airplane, "form conroler");
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "successfully created an airplane",
      data: airplane,
      error: {},
    });
  } catch (err) {
    console.log(err, "from the controoler");
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: " something went wrrong",
      data: {},
      error: err,
    });
  }
}

module.exports = {
  createPlane,
};
