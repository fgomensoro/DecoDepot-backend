const express = require("express");
const reviewsRouter = express.Router();
const reviewsController = require("../controllers/reviewsController");
const { expressjwt: checkJwt } = require("express-jwt");

reviewsRouter.get("/", reviewsController.index);

reviewsRouter.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })),
  (module.exports = reviewsRouter);
