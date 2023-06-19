const { Sequelize } = require("sequelize");
var { Manga } = require("./routes/manga");
var { RelatedProducts } = require("./routes/related_products");
var { Authors } = require("./routes/authors");
var { Genres } = require("./routes/genres");
var { Partners } = require("./routes/partners");
var { ProductionTypes } = require("./routes/production_types");

const sequelize = new Sequelize("manga_lib", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false,
});

const createDB = async () => {
  try {
    await Authors.sync({
      alter: true,
      force: false,
    });
    await Genres.sync({
      alter: true,
      force: false,
    });
    await Partners.sync({
      alter: true,
      force: false,
    });
    await ProductionTypes.sync({
      alter: true,
      force: false,
    });
    await Manga.sync({
      alter: true,
      force: false,
    });
    await RelatedProducts.sync({
      alter: true,
      force: false,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = createDB;
