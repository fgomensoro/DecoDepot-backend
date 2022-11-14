const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsController");
const { expressjwt: checkJwt } = require("express-jwt");

productsRouter.get("/", productsController.index);

productsRouter.post("/", productsController.store);

productsRouter.get("/:id", productsController.show);

productsRouter.patch("/:id", productsController.update);

productsRouter.delete("/:id", productsController.destroy);

module.exports = productsRouter;
