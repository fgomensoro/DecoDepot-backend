const apiRouter = require("./apiRoutes");
const reviewsRouter = require("./reviewsRoutes");
const packsRouter = require("./packsRoutes");

module.exports = (app) => {
  app.use("/api", apiRouter);
  app.use("/reviews", reviewsRouter);
  app.use("/packs", packsRouter);
};
