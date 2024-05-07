const mainRouter = require("express").Router();
const fs = require("fs").promises;

mainRouter.get("/", (req, res) => {
    fs.readFile("./public/index.html", "utf8")
    .then(data => {
        res.header("Content-Type", "text/html");
        res.status(200).send(data);
    })
    .catch(error => {
        res.status(500).send("Server Error");
    })
});

module.exports = mainRouter;