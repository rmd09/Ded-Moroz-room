const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const serverless = require("serverless-http");
const router = express.Router();

const { mainRouter, childrenRouter } = require("./routes");
const { cors } = require("../middlewares");

const app = express();
const PORT = 3000;

router.get("/", (req, res) => {
    res.send("App is running..");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);

// app.use(
    
//     cors,
//     bodyParser.json(),
//     express.static(path.join(__dirname, "public")),
//     mainRouter,
//     childrenRouter
// );

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });