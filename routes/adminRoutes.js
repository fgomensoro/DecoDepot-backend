const express = require("express");
const adminRouter = express.Router();
const productsController = require("../controllers/productsController");
const { expressjwt: checkJwt } = require("express-jwt");

adminRouter.post("/products", productsController.store);
module.exports = adminRouter;
