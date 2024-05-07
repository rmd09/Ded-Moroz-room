const childrenRouter = require("express").Router();
const { findAllChildren, addChild } = require("../middlewares");
const { sendAllChildren, sendChildrenUpdated } = require("../controllers");

childrenRouter.get("/children", findAllChildren, sendAllChildren);

childrenRouter.post("/children", findAllChildren, addChild, sendChildrenUpdated);

module.exports = childrenRouter;