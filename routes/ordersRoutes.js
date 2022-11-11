const express = require("express");
const ordersRouter = express.Router();
const ordersController = require("../controllers/ordersController");
const { expressjwt: checkJwt } = require("express-jwt");

ordersRouter.get("/", ordersController.index);

module.exports = ordersRouter;
