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
const DATA = controller.get();

// ===========================
// Router
// ===========================
const router = express.Router();

router.get("/api", (req, res, next) => {
    // REST data is wrapped in a json envelope
    res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "All cities retrieved",
        data: DATA,
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(PORT, function() {
  console.log("node server running at", PORT);
});
 
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
    // handle cors policy here
}));

app.use("/", router);

