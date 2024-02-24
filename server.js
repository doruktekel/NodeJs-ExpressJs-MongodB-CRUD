require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute.js");
const errorMiddleware = require("./middleware/errorMiddleware.js");
const cors = require("cors");

const app = express();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

/// Create MiddleWare  ///

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

/// Route MiddleWare ///

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome crud app");
});

/// Error Middleware

app.use(errorMiddleware);

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
