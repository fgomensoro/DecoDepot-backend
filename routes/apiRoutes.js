const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController");
const { expressjwt: checkJwt } = require("express-jwt");

apiRouter.get("/", (req, res) => {
  res.send("probando");
});

apiRouter.get("/featured", apiController.ShowFeatured);

apiRouter.post("/signup", apiController.storeUser);
apiRouter.post("/tokens", apiController.token);

module.exports = apiRouter;
