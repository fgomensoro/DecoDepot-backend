const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");

usersRouter.post("/signup", usersController.storeUser);
usersRouter.post("/tokens", usersController.token);

module.exports = usersRouter;
