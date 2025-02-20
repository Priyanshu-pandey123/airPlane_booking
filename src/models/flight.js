"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      this.belongsTo(models.AirPlane, {
        foreignKey: "airplaneId",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "arrivalAirportId",
        as: "arrival",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "departureAirportId",
        as: "departure",
      });
    }
  }
  Flight.init(
    {
      flightNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalTime: DataTypes.DATE,
      departureTime: DataTypes.DATE,
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
