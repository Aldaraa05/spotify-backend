const { Artist } = require("../models/artist");
exports.createArtist = async (req, res) => {
  const body = req.body,
    result = await new Artist(body).save();
  res.send(result);
};
exports.getArtists = async (req, res) => {
  const id = req.params.id,
    result = await Artist.find();
  res.send(result);
};
exports.getArtist = async (req, res) => {
  const id = req.params.id,
    result = await Artist.findById(id);
  res.send(result);
};
