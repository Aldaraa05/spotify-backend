const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Aldaraa:aldar20050513@cluster0.hmsxvll.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to database");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
