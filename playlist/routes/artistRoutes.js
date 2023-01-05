const express = require("express");
const { model } = require("mongoose");
const {
  createArtist,
  getArtist,
  getArtists,
} = require("../controllers/artistController");

const router = express.Router();

router
  .get("/artists", getArtists)
  .get("/artist/:id", getArtist)
  .post("/artists", createArtist)
  .put("/artist/:id", () => {})
  .delete("/artist/:id", () => {});

exports.artistRoutes = router;
