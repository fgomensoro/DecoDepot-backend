const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");
const { expressjwt: checkJwt } = require("express-jwt");

usersRouter.get("/", usersController.index);

usersRouter.post("/signup", usersController.store);
usersRouter.post("/tokens", usersController.token);

module.exports = usersRouter;
