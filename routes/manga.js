var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/manga", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add_manga", function (req, res, next) {
  res.send("respond with a resource");
});

router.patch("/update_manga", function (req, res, next) {
  res.send("respond with a resource");
});

router.delete("/delete_manga", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
