// ===========================
// Import
// ===========================
const fs = require("fs");
const FILE_PATH = __dirname + "/data.json";

// ===========================
// Const
// ===========================
const controller = {
  // get data from data.json
  get: (resolve, reject) => {
    fs.readFile( FILE_PATH, (err, data) => {
      if( !err ){
        resolve( JSON.parse( data ));
        return;
      }
      reject( err ); 
    });
  },


};

module.exports = controller;
