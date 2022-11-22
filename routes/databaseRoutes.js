const express = require("express");
const databaseRouter = express.Router();
const databaseController = require("../controllers/databaseController");

databaseRouter.get("/reset", databaseController.reset);

module.exports = databaseRouter;
