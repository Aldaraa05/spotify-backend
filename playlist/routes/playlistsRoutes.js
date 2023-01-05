const express = require("express");
const { model } = require("mongoose");
const {
  createPlaylist,
  getPlaylist,
  deletePlaylist,
  addToPlaylist,
  getPlaylists,
} = require("../controllers/playlistsController");

const router = express.Router();

router
  .get("/playlists", getPlaylists)
  .get("/playlist/:id", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlists/:id", addToPlaylist)
  .delete("/playlists/:id", deletePlaylist);

exports.playlistRoutes = router;
