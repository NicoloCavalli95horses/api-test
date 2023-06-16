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
    (data) => onResolve(data, res),
    (err) => onReject(err, next)
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


// ===========================
// Functions
// ===========================
function onResolve( data, res ){
  res.status(200).json({
    status: 200,
    statusText: "OK",
    message: "All cities retrieved",
    data,
  });
}

function onReject( err, next ) {
  console.error('Error', err);
  next(err);
}

