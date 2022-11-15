const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsController");
const { expressjwt: checkJwt } = require("express-jwt");

productsRouter.get("/", productsController.index);
productsRouter.get("/:id", productsController.show);

// productsRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),

module.exports = productsRouter;
