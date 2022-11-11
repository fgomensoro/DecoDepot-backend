const express = require("express");
const combosRouter = express.Router();
const combosController = require("../controllers/combosController");
const { expressjwt: checkJwt } = require("express-jwt");

combosRouter.get("/", combosController.ShowCombos);

module.exports = combosRouter;
