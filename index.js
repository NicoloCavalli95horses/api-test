// ===========================
// Import
// ===========================
const express      = require("express");
const cors         = require("cors");
const path         = require("path");
const handleRouter = require("./router");


// ===========================
// Consts
// ===========================
const app = express();
const PORT = process.env.PORT || 5500;


// ===========================
// Router
// ===========================
const router = express.Router();
handleRouter( router );


// ===========================
// App
// ===========================
app.listen(PORT, () =>  console.log("node server running at", PORT));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", router);
