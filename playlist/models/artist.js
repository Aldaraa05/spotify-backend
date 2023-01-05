const { Schema, Types, model } = require("mongoose");
const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});

const Artist = model("Artist", artistSchema);

exports.Artist = Artist;
