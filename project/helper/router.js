const { response } = require("express");
const { default: mongoose } = require("mongoose");
const express = require("express");
const router = express.Router();
// const cors = require("cors");
const app = express();
// app.use(cors());
// app.use(express.json());
// const connect = require("./db");
// connect();

const Cat = mongoose.model("Cat", { name: String });

exports.getData = async (req, res) => {
  const data = await Cat.find({});
  res.send(data);
};
exports.postData = async (req, res) => {
  const body = req.body;
  const kitty = new Cat(body);
  await kitty.save();
  res.send("Successfully created");
};
exports.putData = async (req, res) => {
  const id = req.params.id;
  const cat = await Cat.findByIdAndUpdate(
    id,
    { name: "nohoin gulug" },
    { new: true }
  );
  res.send(cat);
};
exports.delData = async (req, res) => {
  const id = req.params.id;
  const cat = await Cat.deleteOne({ _id: id });
  res;
  res.send("Deleted");
};
