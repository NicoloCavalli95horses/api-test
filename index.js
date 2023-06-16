// ===========================
// Import
// ===========================
const express = require("express");
const cors = require("cors");
const path = require("path");
const controller = require("./data/data_controller");

// ===========================
// Consts
// ===========================
const PORT = process.env.PORT || 5500;
const app = express();

// ===========================
// Router
// ===========================
const router = express.Router();

router.get("/api", (req, res, next) => {
  controller.get(
    (data) => {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "All the data available",
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

// ===========================
// App
// ===========================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(PORT, function () {
  console.log("node server running at", PORT);
});
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", router);
