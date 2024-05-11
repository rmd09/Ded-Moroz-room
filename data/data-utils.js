const fs = require("fs").promises;

async function getAllData() {
    const data = await fs.readFile("./data/data.json", "utf8");
    return JSON.parse(data);
}

async function setData(data) {
    await fs.writeFile("./data/data.json", JSON.stringify(data));
}

module.exports = {
    getAllData,
    setData
};