const { AirPlaneRepository } = require("../repositories/index");

const airplaneRepository = new AirPlaneRepository();

async function createAirPlane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    console.log(data, "from service");
    return airplane;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createAirPlane,
};
