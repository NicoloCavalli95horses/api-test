// ===========================
// Import
// ===========================
const controller = require("./data/data_controller");

// ===========================
// Functions
// ===========================
module.exports = function handleRouter(router) {
  router.post("/login", (req, res, next) => {
    const { username, password } = req.body;

    if ( isAuth({ username, password }) ) {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "Accesso riuscito",
        data: { logged: true },
      });
    } else {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "Accesso negato",
        data: { logged: false },
      });
    }
  });

  // send homepage - Vue will take care of other router requests
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
};


function isAuth({ username, password }) {
  return username == "admin" && password == "abc123";
}
