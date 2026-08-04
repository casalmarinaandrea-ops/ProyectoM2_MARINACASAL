const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Proyecto Integrador 2 funcionando",
  });
});

module.exports = app;