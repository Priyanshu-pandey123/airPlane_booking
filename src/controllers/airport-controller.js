const { AirportServices } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils/error/app-error");
const { errorResponse, successResponse } = require("../utils/common");
const { success } = require("../utils/common/success.response");

async function createAirport(req, res) {
  try {
    const { name, code, address, cityId } = req.body;
    const airport = await AirportServices.createAirPort({
      name,
      code,
      address,
      cityId,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "successfully created an airport",
      data: airport,
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

async function getAirport(req, res) {
  try {
    const data = await AirportServices.getAirport();
    successResponse.data = data;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (err) {
    throw new AppError(
      "Cannot fetch data from  the airport ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirportById(req, res) {
  try {
    console.log(req.params.id);
    const data = await AirportServices.getAirportById(req.params.id);
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
  createAirport,
  getAirport,
  getAirportById,
};
