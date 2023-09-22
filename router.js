// ===========================
// Import
// ===========================
const controller = require("./data/data_controller");

// ===========================
// Functions
// ===========================
module.exports = function handleRouter(router) {
  router.get("/api", (req, res, next) => {
    controller.get(
      (data) => {
        res.status(200).json({
          status: 200,
          statusText: "OK",
          message: "Pizza 🍕",
          data,
        });
      },
      (err) => {
        next(err);
      }
    );
  });

  router.get("/api/:id", (req, res, next) => {
    controller.getID(
      req.params.id,
      (data) => {
        res.status(200).json({
          status: 200,
          statusText: "OK",
          message: `Data matching the ID: ${req.params.id}`,
          data: data,
        });
      },
      (err) => {
        res.status(404).send({
          status: 404,
          statusText: "Not found",
          message: err,
        });
      }
    );
  });

  // send homepage. Vue will take care of other router requests
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}
