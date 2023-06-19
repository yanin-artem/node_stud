const createDB = require("./DB");
const { authorsCRUD } = require("./routes/authors");
const { genresCRUD } = require("./routes/genres");
const { mangaCRUD } = require("./routes/manga");
const { partnersCRUD } = require("./routes/partners");
const { production_typesCRUD } = require("./routes/production_types");
const { related_productsCRUD } = require("./routes/related_products");

(async () => {
  await createDB();
  await authorsCRUD();
  await genresCRUD();
  await mangaCRUD();
  await partnersCRUD();
  await production_typesCRUD();
  await related_productsCRUD();
})();
