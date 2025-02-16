const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories/index");
const { AppError } = require("../utils/error/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    console.log(data, "from services");
    const city = await cityRepository.create(data);
    console.log(city);
    return city;
  } catch (err) {
    console.log(err);
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
