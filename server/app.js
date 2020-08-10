// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const app = express();
// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

// ENDPOINTS
app.get("/api/projects", async (req,res) => {
  try {
    console.log("/api/projects");
    const projects = await db.select().table("projects");
    res.json(projects);
  } catch(err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});


// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });

module.exports = app;