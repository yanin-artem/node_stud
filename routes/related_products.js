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

const related_productsCRUD = async () => {
  console.log(await RelatedProducts.findAll());
  console.log(await RelatedProducts.create({ name: "hello" }));
};

module.exports = { related_productsCRUD, RelatedProducts };
