"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AirPlane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight, {
        foreignKey: "airplaneId",
        onDelete: "CASCADE",
      });
    }
  }
  AirPlane.init(
    {
      modelNumber: DataTypes.STRING,
      capacity: {
        type: DataTypes.INTEGER,
        validate: {
          max: 1000,
        },
      },
    },
    {
      sequelize,
      modelName: "AirPlane",
    }
  );
  return AirPlane;
};
