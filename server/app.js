// server/app.js
const express = require("express");
const bodyParser = require("body-parser");
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
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "..", "build")));

// ENDPOINTS----------------------------------------------------------------------------------
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

app.get("/api/projects/:name", async (req,res) => {
  try {
    const projects = await db
      .select()
      .table("projects")
      .where("project_name", req.params.name);
    res.json(projects)
  } catch(err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
})

app.get("/api/members", async (req,res) => {
  try {
    console.log("/api/members");
    const members = await db.select().table("members");
    res.json(members);
  } catch(err) {
    console.error("Error loading location!", err);
    res.sendStatus(500);
  }
});

app.get("/api/members/:name", async (req,res) => {
  try {
    console.log("/api/members");
    const members = await db
      .select()
      .table("members")
      .where("mote", req.params.name);
    res.json(members)
  } catch(err) {
    console.error("Error loading member!", err);
    res.sendStatus(500);
  }
})

app.post("/api/members", async (req,res) => {
  try {
    const members = await db("members").insert(req.body, 'id');
    res.json(members)
  } catch(err) {
    console.error("Error posting new member!", err);
    res.sendStatus(500);
  }
})
// ENDPOINTS----------------------------------------------------------------------------------

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });

module.exports = app;