const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");
const { expressjwt: checkJwt } = require("express-jwt");

usersRouter.post("/signup", usersController.store);
usersRouter.post("/tokens", usersController.token);

usersRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),
  //   usersRouter.get("/:id", usersController.show);

  (module.exports = usersRouter);
