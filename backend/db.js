const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://anant01tyagi:Eminem-01@cluster0.oosj1l7.mongodb.net/affame?retryWrites=true&w=majority";

const foodItemSchema = new mongoose.Schema({
  CategoryName: String,
  description: String,
});

const FoodItem = mongoose.model("food_items", foodItemSchema);
const FoodCategory = mongoose.model("food_categories", foodItemSchema);

const mongoDB = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected");

  FoodItem.find({})
    .exec()
    .then((data) => {
      global.food_items = data;
    })
    .catch((err) => {
      console.error(err);
    });

  FoodCategory.find({})
    .exec()
    .then((data) => {
      global.food_categories = data;
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = mongoDB;
