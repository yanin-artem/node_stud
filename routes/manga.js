var express = require("express");
var mangaRouter = express.Router();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Manga = sequelize.define(
  "manga",
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
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "manga",
    timestamps: true,
  }
);

/* GET users listing. */
mangaRouter.get("/get", function (req, res, next) {
  res.send("respond with a resource");
});

mangaRouter.post("/add", function (req, res, next) {
  res.send("respond with a resource");
});

mangaRouter.patch("/update", function (req, res, next) {
  res.send("respond with a resource");
});

mangaRouter.delete("/delete", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = { mangaRouter, Manga };
