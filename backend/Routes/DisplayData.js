const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.food_items]);
  } catch (error) {}
});

router.post("/foodCategories", (req, res) => {
  try {
    res.send([global.food_categories]);
  } catch (error) {}
});

module.exports = router;
