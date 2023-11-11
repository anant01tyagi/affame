const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const mongoDB = require("./db");
mongoDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
