const connect = require("./config/db");
const express = require("express");
const cors = require("cors");
const { playlistRoutes, songRoutes, artistRoutes, userRoutes } = require("./routes");

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use(playlistRoutes);
app.use(songRoutes);
app.use(artistRoutes);
app.use(userRoutes);

connect();

// app.get("/", (req, res) => {
//   res.send("Hello world  :))");
// });
app.listen(port, () => {
  console.log("Server is running at", port);
});
