function sendAllChildren(req, res) {
    res.header("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(req.children));
}

module.exports = sendAllChildren;