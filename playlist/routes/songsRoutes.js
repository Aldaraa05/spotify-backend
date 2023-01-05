const express = require("express");
const {
  createSong,
  getSong,
  getSongs,
  addToSong,
  deleteSong,
} = require("../controllers/songsController");
const Song = require("../models/songModels");
const router = express.Router();

router
  .post("/songs", createSong)
  .get("/songs", getSongs)
  .get("/songs/:id", getSong)
  .put("/song/:id", addToSong)
  .delete("/song/:id", deleteSong);

exports.songRoutes = router;
