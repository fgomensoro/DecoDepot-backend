const productsRouter = require("./productsRoutes");
const ordersRouter = require("./ordersRoutes");
const usersRouter = require("./usersRoutes");
const reviewsRouter = require("./reviewsRoutes");
const categoriesRouter = require("./categoriesRoutes");
const packsRouter = require("./packsRoutes");
const databaseRouter = require("./databaseRoutes");

module.exports = (app) => {
  app.use("/products", productsRouter);
  app.use("/orders", ordersRouter);
  app.use("/users", usersRouter);
  app.use("/reviews", reviewsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/packs", packsRouter);
  app.use("/database", databaseRouter);
};
