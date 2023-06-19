var express = require("express");
var authorsRouter = express.Router();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Authors = sequelize.define(
  "authors",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "authors",
    timestamps: false,
  }
);

const authorsCRUD = async () => {
  console.log(await Authors.findAll());
  console.log(
    await Authors.create({ first_name: "hello", last_name: "world" })
  );
};

module.exports = { authorsCRUD, Authors };
