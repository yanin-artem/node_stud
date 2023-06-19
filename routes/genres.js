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

const genresCRUD = async () => {
  console.log(await Genres.findAll());
  console.log(await Authors.create({ name: "жанр" }));
};

module.exports = { genresCRUD, Genres };
