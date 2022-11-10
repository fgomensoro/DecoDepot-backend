const apiRouter = require("./apiRoutes");
const reviewsRouter = require("./reviewsRoutes");

module.exports = (app) => {
  app.use("/api", apiRouter);
  app.use("/reviews", reviewsRouter);
};
