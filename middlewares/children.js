const getAllData = require("../data/data-utils");

async function findAllChildren(req, res, next) {
    const data = await getAllData();
    if (data instanceof Error) {
        res.status(500).send("Server Error");
    }
    else {
        req.children = data;
        next();
    }
}

module.exports = findAllChildren;