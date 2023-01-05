const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Aldaraa:aldar20050513@cluster0.hmsxvll.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    // throw new Error(err.message);
    console.log(err);
  }
};
module.exports = connect;
