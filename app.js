const express = require("express");
const app = express();
const teams = require("./microsoftTeams/teamsUtility");

const morgan = require("morgan");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Welcome To Troubleshooting Bot");
});

app.use("/teams", teams);


module.exports = app;
