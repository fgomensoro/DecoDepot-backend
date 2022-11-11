const apiRouter = require("./apiRoutes");
const reviewsRouter = require("./reviewsRoutes");
const combosRouter = require("./combosRoutes");
const usersRouter = require("./usersRoutes");

module.exports = (app) => {
  app.use("/api", apiRouter);
  app.use("/reviews", reviewsRouter);
  app.use("/combos", combosRouter);
  app.use("/users", usersRouter);
};
