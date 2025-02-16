"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Airports", {
      fields: ["cityId"],
      type: "foreign key",
      name: "airport_fkey_constraint",
      references: {
        table: "Cities",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addConstraint("Airports", {
      fields: ["cityId"],
      type: "id",
      name: "airport_fkey_constraint",
    });
  },
};
