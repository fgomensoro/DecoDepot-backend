const apiRouter = require("./apiRoutes");
const productsRouter = require("./productsRoutes");
const ordersRouter = require("./ordersRoutes");
const usersRouter = require("./usersRoutes");
const reviewsRouter = require("./reviewsRoutes");
const categoriesRouter = require("./categoriesRoutes");
const packsRouter = require("./packsRoutes");
const adminRouter = require("./adminRoutes");

module.exports = (app) => {
  app.use("/api", apiRouter);
  app.use("/products", productsRouter);
  app.use("/orders", ordersRouter);
  app.use("/users", usersRouter);
  app.use("/reviews", reviewsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/packs", packsRouter);
  app.use("/admin", adminRouter);
};
