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

/* GET users listing. */
production_typesRouter.get("/get", function (req, res, next) {
  res.send("respond with a resource");
});

production_typesRouter.post("/add", function (req, res, next) {
  res.send("respond with a resource");
});

production_typesRouter.patch("/update", function (req, res, next) {
  res.send("respond with a resource");
});

production_typesRouter.delete("/delete", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = { production_typesRouter, ProductionTypes };
