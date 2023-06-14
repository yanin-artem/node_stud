var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/related_products", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add_related_products", function (req, res, next) {
  res.send("respond with a resource");
});

router.patch("/update_related_products", function (req, res, next) {
  res.send("respond with a resource");
});

router.delete("/delete_related_products", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
