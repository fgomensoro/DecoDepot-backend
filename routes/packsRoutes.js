const express = require("express");
const packsRouter = express.Router();
const packsController = require("../controllers/packsController");
const { expressjwt: checkJwt } = require("express-jwt");

packsRouter.get("/", packsController.index);

packsRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),
  (module.exports = packsRouter);
