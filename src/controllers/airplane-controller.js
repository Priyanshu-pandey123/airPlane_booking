const { AirPlaneService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/error/app-error");
const { errorResponse, successResponse } = require("../utils/common");
const { success } = require("../utils/common/success.response");
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
    if (err.name === "SequelizeValidationError") {
      let explanation = [];
      err.errors.forEach((element) => {
        explanation.push(element.message);
      });
      errorResponse.error = new AppError(explanation, StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: " something went wrrong",
      data: {},
      error: err,
    });
  }
}

async function getFlight(req, res) {
  try {
    const data = await AirPlaneService.getAirPlane();
    successResponse.data = data;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (err) {
    throw new AppError(
      "Cannot fetch data from  the plane ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getFlightId(req, res) {
  try {
    console.log();
    const data = await AirPlaneService.getAirPlaneById(req.params.id);
    successResponse.data = data;
    successResponse.message = "Successfully get the data";
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (err) {
    errorResponse.message = err.message;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}

//TODO:  function for destroy the airplane
module.exports = {
  createPlane,
  getFlight,
  getFlightId,
};
