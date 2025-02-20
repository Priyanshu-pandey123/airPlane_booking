const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories/index");
const { AppError } = require("../utils/error/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);

    return city;
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

module.exports = {
  createCity,
};
