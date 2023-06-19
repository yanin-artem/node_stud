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

/* GET users listing. */
partnersRouter.get("/get", function (req, res, next) {
  res.send("respond with a resource");
});

partnersRouter.post("/add", function (req, res, next) {
  res.send("respond with a resource");
});

partnersRouter.patch("/update", function (req, res, next) {
  res.send("respond with a resource");
});

partnersRouter.delete("/delete", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = { partnersRouter, Partners };
