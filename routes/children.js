const childrenRouter = require("express").Router();
const { findAllChildren } = require("../middlewares");
const { sendAllChildren } = require("../controllers");

childrenRouter.get("/children", findAllChildren, sendAllChildren);

module.exports = childrenRouter;