const express = require("express");
const reviewsRouter = express.Router();
const reviewsController = require("../controllers/reviewsController");
const { expressjwt: checkJwt } = require("express-jwt");

reviewsRouter.get("/", reviewsController.index);

module.exports = reviewsRouter;
