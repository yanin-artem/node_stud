var express = require("express");
var related_productsRouter = express.Router();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const RelatedProducts = sequelize.define(
  "related_products",
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
    manga_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    production_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    manufacturer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "related_products",
    timestamps: true,
  }
);

/* GET users listing. */
related_productsRouter.get("/get", function (req, res, next) {
  res.send("respond with a resource");
});

related_productsRouter.post("/add", function (req, res, next) {
  res.send("respond with a resource");
});

related_productsRouter.patch("/update", function (req, res, next) {
  res.send("respond with a resource");
});

related_productsRouter.delete("/delete", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = { related_productsRouter, RelatedProducts };
