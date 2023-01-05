const express = require("express");
const { model } = require("mongoose");
const {
  createUser,
  getUser,
  getUsers,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router
  .get("/users", getUsers)
  .get("/user/:id", getUser)
  .post("/users", createUser)
  .post("/login", loginUser)
  .put("/user/:id", () => {})
  .delete("/user/:id", () => {});

exports.userRouter = router;
