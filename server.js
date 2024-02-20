const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/// Routes ///

app.get("/", (req, res) => {
  res.send("ana 11111");
});

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error", error);
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res
        .status(404)
        .json({ message: `Cant find any product with this id:${id} ` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res
        .status(404)
        .json({ message: `Cant find any product with this id:${id} ` });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/// Cpnnect Port ///

app.listen(3000, () => {
  console.log("App is running on Port 3000");
});

/// Connect Database ///

mongoose
  .connect(
    "mongodb+srv://doruktekel55:kpUFSiuL3eqFGc92@cluster0.lnswn5q.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));
