const express = require("express");
const ordersRouter = express.Router();
const ordersController = require("../controllers/ordersController");
const { expressjwt: checkJwt } = require("express-jwt");

ordersRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),
  (module.exports = ordersRouter);
