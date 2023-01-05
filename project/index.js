const port = 8080;
const express = require("express");
const cors = require("cors");
const connect = require("./helper/db");
const { getData, putData, delData, postData } = require("./helper/router");

connect();

const app = express();

const router = express.Router();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Get request is successfully.");
});

router
  .post("/cats", postData)
  .get("/cats", getData)
  .put("/cat/:id", putData)
  .delete("/cat/:id", delData);

app.use("/", router);

app.listen(port, () => {
  console.log("Server listening at:", port);
});
