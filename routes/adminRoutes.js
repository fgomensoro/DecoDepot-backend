const express = require("express");
const adminRouter = express.Router();
const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");
const ordersController = require("../controllers/ordersController");
const { expressjwt: checkJwt } = require("express-jwt");
const ensureIsAdmin = require("../middlewares/isAdmin");

adminRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),
  adminRouter.use(ensureIsAdmin);

adminRouter.get("/users", usersController.index);

adminRouter.post("/products/", productsController.store);
adminRouter.patch("/products/:id", productsController.update);
adminRouter.delete("/products/:id", productsController.destroy);

adminRouter.get("/orders", ordersController.index);

module.exports = adminRouter;
