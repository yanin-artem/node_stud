var express = require("express");
var production_typesRouter = express.Router();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const ProductionTypes = sequelize.define(
  "production_types",
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
      allowNull: false,
    },
  },
  {
    tableName: "production_types",
    timestamps: false,
  }
);

const production_typesCRUD = async () => {
  console.log(await ProductionTypes.findAll());
  console.log(await ProductionTypes.create({ name: "hello" }));
};

module.exports = { production_typesCRUD, ProductionTypes };
