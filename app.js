const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const { mainRouter, childrenRouter } = require("./routes");
const { cors } = require("./middlewares");

const PORT = 3000;

const app = express();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    mainRouter,
    childrenRouter
);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});