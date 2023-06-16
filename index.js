// ===========================
// Import
// ===========================
const express = require("express");
const cors = require("cors");

// ===========================
// Consts
// ===========================
const PORT = process.env.PORT || 5000;
const DATA = [
    { id: 1, name: "Boston" },
    { id: 2, name: "New York" },
    { id: 3, name: "Chicago" },
];
const app = express();


// ===========================
// Router
// ===========================
const router = express.Router();

router.get("/", function (req, res, next) {
    // REST data is wrapped in a json envelope
    res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "All cities retrieved",
        data: DATA,
    });
});

app.listen(PORT, function() {
  console.log("node server running at", PORT);
});
 
app.use(cors({
    // handle cors policy here
}));
app.use("/api", router);

