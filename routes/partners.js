var express = require("express");
var partnersRouter = express.Router();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Partners = sequelize.define(
  "partners",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manga: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    related_products: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "partners",
    timestamps: false,
  }
);

const partnersCRUD = async () => {
  console.log(await Partners.findAll());
  console.log(await Partners.create({ manga: 1, related_products: 1 }));
};

module.exports = { partnersCRUD, Partners };
