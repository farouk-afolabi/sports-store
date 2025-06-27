const express = require("express");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const cors = require("cors"); // <-- Add this line
const auth = require("./authMiddleware");

const app = express();
const router = jsonServer.router("serverdata.json");

// Allow your frontend domain (GitHub Pages)
app.use(cors({
  origin: "https://farouk-afolabi.github.io", // <-- yo
  credentials: true
}));

// Middleware
app.use(bodyParser.json());
app.use(auth);

// API Routes
app.use("/api", router);

// Use Render-assigned port
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
