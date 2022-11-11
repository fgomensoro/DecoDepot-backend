const apiRouter = require("./apiRoutes");
const reviewsRouter = require("./reviewsRoutes");
const combosRouter = require("./combosRoutes");

module.exports = (app) => {
  app.use("/api", apiRouter);
  app.use("/reviews", reviewsRouter);
  app.use("/combos", combosRouter);
};
