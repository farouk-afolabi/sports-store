const express = require("express");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const auth = require("./authMiddleware");

const app = express();
const router = jsonServer.router("serverdata.json");

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
    "https://farouk-afolabi.github.io" , // Live site 
'http://localhost:4200', //  Angular dev server
'http://localhost:80'  // Docker Frontend

  ];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));

// Middleware
app.use(bodyParser.json());
app.use(auth);

// API Routes
app.use("/api", router);

// Using Render-assigned port
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
  
