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

/* GET users listing. */
authorsRouter.get("/authors", function (req, res) {
  //   const authors = await Authors.findAll();
  //   console.log("authors");
  //   res.write(authors);
  res.render("index", { title: "Express" });
});
// authorsRouter.get()

// authorsRouter.post("/add", function (req, res, next) {
//   res.send("respond with a resource");
// });

// authorsRouter.patch("/update", function (req, res, next) {
//   res.send("respond with a resource");
// });

// authorsRouter.delete("/delete", function (req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = { authorsRouter, Authors };
