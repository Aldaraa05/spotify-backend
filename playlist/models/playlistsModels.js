const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
  title: String,
  description: String,
  //   creatorId: Types.ObjectID,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
  isPrivate: Boolean,
  songs: [{ type: Schema.Types.ObjectId, ref: "Songs" }],
});

const Playlist = model("Playlist", playlistSchema);

exports.Playlist = Playlist;
