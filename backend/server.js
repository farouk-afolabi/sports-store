const express = require("express");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const auth = require("./authMiddleware");

const app = express();
const router = jsonServer.router("serverdata.json");

// Middleware
app.use(bodyParser.json());
app.use(auth);

// API Routes
app.use("/api", router);

// Use Render-assigned port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
