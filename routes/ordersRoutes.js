const express = require("express");
const ordersRouter = express.Router();
const ordersController = require("../controllers/ordersController");
const { expressjwt: checkJwt } = require("express-jwt");
const ensureIsAdmin = require("../middlewares/isAdmin");

// ordersRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),
//   ordersRouter.use(ensureIsAdmin);

ordersRouter.get("/", ordersController.index);

ordersRouter.post("/", ordersController.store);

module.exports = ordersRouter;
