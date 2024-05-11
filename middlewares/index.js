const cors = require("./cors");
const { findAllChildren, addChild, changeChild, addId, deleteChild } = require("./children");

module.exports = {
    cors,
    findAllChildren,
    addChild,
    addId,
    changeChild,
    deleteChild
}