const { getAllData, setData } = require("../data/data-utils");

async function findAllChildren(req, res, next) {
    try {
        req.children = await getAllData();
        next();
    } catch (error) {
        res.status(500).send("Server Error");
    }
}

async function addChild(req, res, next) {
    const data = req.children;
    data.push(req.body);
    console.log("addChild");

    try {
        setData(data);
        req.updatedData = data;
        next();
    } catch (error) {
        res.status(500).send("Server Error");
    }
}

module.exports = {
    findAllChildren,
    addChild
};