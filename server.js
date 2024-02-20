const express = require("express");
const app = express();

/// Routes ///

app.get("/", (req, res) => {
  res.send("ana 11111");
});

/// Cpnnect Port ///

app.listen(3000, () => {
  console.log("App is running on Port 3000");
});
