const express = require("express");
const pool = require("./config/db");

const app = express();

app.use(express.json());
pool
  .query("SELECT NOW()")
  .then(() => console.log("✅ Conexión exitosa a PostgreSQL"))
  .catch((error) => console.error("❌ Error de conexión:", error));
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Proyecto Integrador 2 funcionando",
  });
});

module.exports = app;