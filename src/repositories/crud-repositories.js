const { where } = require("sequelize");
const logger = require("../config/logger-config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (err) {
      logger.error("Something went wrong in create: " + err);
      throw err; // Re-throw the error after logging
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.destroy({
        where: {
          id: id,
        },
      });
      return response;
    } catch (err) {
      logger.error("Something went wrong in destroy: " + err);
      throw err;
    }
  }

  async findAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (err) {
      logger.error("Something went wrong in findAll: " + err);
      throw err;
    }
  }

  async findOne(id) {
    try {
      const response = await this.model.findOne({
        where: {
          id: id,
        },
      });
      return response;
    } catch (err) {
      logger.error("Something went wrong in findOne: " + err);
      throw err;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (err) {
      logger.error("Something went wrong in update: " + err);
      throw err;
    }
  }
}

module.exports = CrudRepository;
