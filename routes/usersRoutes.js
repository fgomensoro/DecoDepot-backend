const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");
const { expressjwt: checkJwt } = require("express-jwt");

usersRouter.get("/", usersController.index);

module.exports = usersRouter;
