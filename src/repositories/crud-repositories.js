const { where } = require("sequelize");
const logger = require("../config/logger-config");
const { AppError } = require("../utils/error/app-error");
const { StatusCodes } = require("http-status-codes");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
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
      console.log(id, "from crud");
      const response = await this.model.findByPk(id);
      if (!response) {
        throw new AppError(
          "cannot find the data by this id",
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      }
      return response;
    } catch (err) {
      console.log(err);
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
      console.log(err);
      logger.error("Something went wrong in update: " + err);
      throw err;
    }
  }
}

module.exports = CrudRepository;
