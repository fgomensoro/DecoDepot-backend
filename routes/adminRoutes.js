const express = require("express");
const adminRouter = express.Router();
const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");
const ordersController = require("../controllers/ordersController");
const reviewsController = require("../controllers/reviewsController");
const categoriesController = require("../controllers/categoriesController");
const packsController = require("../controllers/packsController");
const { expressjwt: checkJwt } = require("express-jwt");
const ensureIsAdmin = require("../middlewares/isAdmin");

adminRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),
  adminRouter.use(ensureIsAdmin);

adminRouter.get("/users", usersController.index);

adminRouter.get("/products", productsController.index);
adminRouter.get("/products/:id", productsController.show);
adminRouter.post("/products", productsController.store);
adminRouter.patch("/products/:id", productsController.update);
adminRouter.delete("/products/:id", productsController.destroy);

adminRouter.get("/packs", packsController.ShowPacks);

adminRouter.get("/categories", categoriesController.index);

adminRouter.get("/reviews", reviewsController.index);

adminRouter.get("/orders", ordersController.index);

module.exports = adminRouter;
