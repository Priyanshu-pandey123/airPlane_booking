const { StatusCodes } = require("http-status-codes");
const { successResponse, errorResponse } = require("../utils/common");
const { CityServices } = require("../services");
const { data } = require("../utils/common/error.response");
const { AppError } = require("../utils/error/app-error");

const createCity = async (req, res) => {
  try {
    const city = await CityServices.createCity(req.body);
    successResponse.message = "successfully created controller";
    successResponse.data = city;
    res.status(StatusCodes.CREATED).json(successResponse);
  } catch (err) {
    if (err.name == "SequelizeUniqueConstraintError") {
      errorResponse.message = "cannot create duplicate entry";
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    throw new AppError("make be some failure ");
  }
};

module.exports = {
  createCity,
};
