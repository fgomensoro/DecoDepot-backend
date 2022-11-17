const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController");
const { expressjwt: checkJwt } = require("express-jwt");
/* const usersController = require("../controllers/usersController"); */

apiRouter.get("/", (req, res) => {
  res.send("probando");
});

apiRouter.get("/featured", apiController.ShowFeatured);
/* apiRouter.post("/signup", usersController.storeUser);
apiRouter.post("/tokens", usersController.token); */

module.exports = apiRouter;
