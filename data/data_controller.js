// ===========================
// Import
// ===========================
const fs = require("fs");
const FILE_PATH = __dirname + "/data.json";

// ===========================
// Function
// ===========================
function _readData() {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON file:", err);
    return null;
  }
}

// ===========================
// Const
// ===========================
const controller = {
  get: function (resolve, reject) {
    const data = _readData();
    data ? resolve(data) : reject(data);
  },
  getID: function (id, resolve, reject) {
    const data = _readData();
    if (data) {
      const filteredData = data.filter((item) => item.id == id);
      resolve(filteredData);
    }
    reject(data);
  },
};

module.exports = controller;
