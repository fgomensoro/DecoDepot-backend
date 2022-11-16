const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");
const { expressjwt: checkJwt } = require("express-jwt");
const ensureIsAdmin = require("../middlewares/isAdmin");

usersRouter.get("/:id", usersController.show);
usersRouter.post("/signup", usersController.store);
usersRouter.post("/tokens", usersController.token);
usersRouter.patch("/:id", usersController.update);
usersRouter.delete("/:id", usersController.destroy);

usersRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),
  usersRouter.use(ensureIsAdmin);

usersRouter.get("/", usersController.index);
module.exports = usersRouter;
