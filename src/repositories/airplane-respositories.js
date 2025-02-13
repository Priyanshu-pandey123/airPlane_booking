const CrudRepository = require("./crud-repositories");
const { AirPlane } = require("../models");

class AirPlaneRepository extends CrudRepository {
  constructor() {
    super(AirPlane);
  }
}

module.exports = AirPlaneRepository;
