const express = require("express");
const packsRouter = express.Router();
const packsController = require("../controllers/packsController");
const { expressjwt: checkJwt } = require("express-jwt");

packsRouter.get("/", packsController.ShowPacks);

module.exports = packsRouter;
