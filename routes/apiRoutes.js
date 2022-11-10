const express = require("express");
const userRouter = express.Router();
const apiController = require("../controllers/apiController");
const { expressjwt: checkJwt } = require("express-jwt");

userRouter.get("/", (req, res) => {
  res.send("probando");
});

userRouter.get("/featured", apiController.ShowFeatured);

module.exports = userRouter;
