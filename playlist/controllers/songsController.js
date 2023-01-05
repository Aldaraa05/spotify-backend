const { Song } = require("../models/songModels");

exports.createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body);

  let error = Song.validate();
  try {
    await result.save();
  } catch (err) {
    error = err;
  }
  res.send(error);
};
exports.getSongs = async (req, res) => {
  const id = req.params.id;
  const result = await Song.find({}).populate("artist");
  res.send(result);
};
exports.getSong = async (req, res) => {
  const { id } = req.params;
  const song = await Song.findById({ _id: id }).populate("artist");
  res.send(song);
};
exports.deleteSong = async (req, res) => {
  const { id } = req.params;
  const song = await Song.findByIdAndRemove({ _id: id });
  res.send(song);
};
exports.updatesong = async (req, res) => {
  const { id } = req.params;
  const song = await Song.findByIdAndUpdate({ _id: id }, req.body);
  res.send(song);
};
exports.addToSong = async (req, res) => {
  const songsId = req.params.id;
  const artistsId = req.body.id;

  const song = await Song.findById(songsId);

  song.artist.push(artistsId);

  await song.save();

  res.send(song);
};
