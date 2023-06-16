// ===========================
// Import
// ===========================
const fs = require("fs");
const FILE_PATH = __dirname + "/data.json";

// ===========================
// Const
// ===========================
const controller = {
  get: function() {
    const raw = fs.readFileSync(FILE_PATH);
    const json = JSON.parse(raw);
    return json;
  },
};

module.exports = controller;
