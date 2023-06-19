var express = require("express");
var genresRouter = express.Router();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Genres = sequelize.define(
  "genres",
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
    tableName: "genres",
    timestamps: false,
  }
);

/* GET users listing. */
// genresRouter.get("/get", Genres.findAll());

// genresRouter.post("/add", function (req, res, next) {
//   res.send("respond with a resource");
// });

// genresRouter.patch("/update", function (req, res, next) {
//   res.send("respond with a resource");
// });

// genresRouter.delete("/delete", function (req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = { genresRouter, Genres };
