const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://anant01tyagi:Eminem-01@cluster0.oosj1l7.mongodb.net/affame?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI);
  //  .then(() => {
  console.log("connected");
  const fetched_data = await mongoose.connection.db.collection("food_items");
  fetched_data.find({}).toArray(function (err, data) {
    if (err) console.log(err);
    else console.log("Data: ", data);
  });
  //  })
  // .catch((err) => {
  //   console.log("Error: ", err);
  // });
};

module.exports = mongoDB;
