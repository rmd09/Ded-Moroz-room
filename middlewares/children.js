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

    try {
        await setData(data);
        req.updatedData = data;
        next();
    } catch (error) {
        res.status(500).send("Server Error");
    }
}

function addId(req, res, next) {
    let maxId = 0;
    req.children.forEach(item => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });
    req.body.id = maxId + 1;
    next();
}

async function changeChild(req, res, next) {
    const updatedData = req.children.map(item => {
        if (item.id == req.params.id) {
            return req.body;
        } else {
            return item;
        }
    });
    try {
        await setData(updatedData);
        req.updatedData = updatedData;
        next();
    } catch (error) {
        res.status(500).send("Server Error");
    }
}

async function deleteChild(req, res, next) {
    const updatedData = [];
    req.children.forEach(item => {
        if (item.id != req.params.id) {
            updatedData.push(item);
        }
    });

    try {
        await setData(updatedData);
        req.updatedData = updatedData;
        next();
    } catch (error) {
        res.status(500).send("Server Error");
    }
}

module.exports = {
    findAllChildren,
    addChild,
    addId,
    changeChild,
    deleteChild
};