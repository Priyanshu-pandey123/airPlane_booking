const { StatusCodes } = require("http-status-codes");
const { AirPlaneRepository } = require("../repositories/index");
const { AppError } = require("../utils/error/app-error");

const airplaneRepository = new AirPlaneRepository();

async function createAirPlane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    console.log(data, "from service");
    return airplane;
  } catch (err) {
    if (err.name == "TypeError") {
      throw AppError(
        "cannot create a new airplane object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw err;
  }
}

async function getAirPlane() {
  try {
    const data = airplaneRepository.findAll();
    return data;
  } catch (err) {
    console.log(err);
  }
}
async function getAirPlaneById(id) {
  try {
    const data = await airplaneRepository.findOne(id);
    return data;
  } catch (err) {
    throw new AppError(
      "cannot find  the data by this data",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirPlane,
  getAirPlane,
  getAirPlaneById,
};
