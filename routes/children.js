const childrenRouter = require("express").Router();
const { findAllChildren, addChild, changeChild, addId, deleteChild } = require("../middlewares");
const { sendAllChildren, sendChildrenUpdated } = require("../controllers");

childrenRouter.get("/children", findAllChildren, sendAllChildren);

childrenRouter.put("/children", findAllChildren, addId, addChild, sendChildrenUpdated);

childrenRouter.post("/children/:id", findAllChildren, changeChild, sendChildrenUpdated);

childrenRouter.delete("/children/:id", findAllChildren, deleteChild, sendChildrenUpdated);

module.exports = childrenRouter;