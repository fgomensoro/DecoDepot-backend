const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsController");
const { expressjwt: checkJwt } = require("express-jwt");

productsRouter.get("/", productsController.index);

productsRouter.get("/detail/:id", productsController.detail);

productsRouter.get("/similar/:id", productsController.detailSimilar);

module.exports = productsRouter;
