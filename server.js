require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute.js");
const app = express();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;

/// Create MiddleWare  ///

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/// Route MiddleWare ///

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome crud app");
});

/// Connect Port & Database ///

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log(`App is running on Port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
