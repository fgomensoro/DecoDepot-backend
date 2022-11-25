const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsController");
const { expressjwt: checkJwt } = require("express-jwt");
const ensureIsAdmin = require("../middlewares/isAdmin");

productsRouter.get("", productsController.index);
productsRouter.get("/:slug", productsController.show);

productsRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));
productsRouter.use(ensureIsAdmin);

productsRouter.post("", productsController.store);
productsRouter.patch("/:id", productsController.update);
productsRouter.delete("/:id", productsController.destroy);

module.exports = productsRouter;
