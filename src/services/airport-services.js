const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories/index");
const { AppError } = require("../utils/error/app-error");

const airportRepository = new AirportRepository();

async function createAirPort(data) {
  try {
    const airport = await airportRepository.create(data);

    return airport;
  } catch (err) {
    if (err.name == "TypeError") {
      throw AppError(
        "cannot create a new airport object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw err;
  }
}

async function getAirport() {
  try {
    const data = airportRepository.findAll();
    return data;
  } catch (err) {
    throw err;
  }
}
async function getAirportById(id) {
  try {
    console.log(id, "form services");
    const data = await airportRepository.findOne(id);
    return data;
  } catch (err) {
    throw new AppError(
      "cannot find  the data by this data",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirPort,
  getAirport,
  getAirportById,
};
