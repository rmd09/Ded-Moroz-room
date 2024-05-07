const fs = require("fs").promises;

async function getAllData() {
    try {
        const data = await fs.readFile("./data/data.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        return error;
    }
}

module.exports = getAllData;