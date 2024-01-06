const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const http = require("http");

const app = express();

const server = http.createServer(app);
app.use(cors({ origin: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://0.0.0.0:27017/ArcFit")
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Error in Database Connectivity");
  });

var user = require("./Schema.js");

app.post("/", async (req, res, next) => {
//   console.log(req.body);
  const data = new user({
    name: req.body.name,
    email: req.body.email,
    reason: req.body.reason,
    remarks: req.body.remarks,
  });

  try {
    const result = await data.save();
    console.log(result);
    res.send({ user: true, data: result });
  } catch (e) {
    res.send({ user: false });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on 5000`);
});
