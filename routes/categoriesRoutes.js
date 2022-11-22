const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");
const { expressjwt: checkJwt } = require("express-jwt");

categoriesRouter.get("/", categoriesController.index);

categoriesRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

module.exports = categoriesRouter;
