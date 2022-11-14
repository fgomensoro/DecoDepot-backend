const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");
const { expressjwt: checkJwt } = require("express-jwt");

categoriesRouter.get("/", categoriesController.index);

module.exports = categoriesRouter;
