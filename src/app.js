const express = require("express");
const pool = require("./config/db");

const authorsRoutes = require("./routes/authorsRoutes");
const postsRoutes = require("./routes/postsRoutes");

const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const setupSwagger = require("../docs/swagger");

const app = express();

app.use(express.json());

setupSwagger(app);

app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);

pool
  .query("SELECT NOW()")
  .then(() => console.log("✅ Conexión exitosa a PostgreSQL"))
  .catch((error) =>
    console.error("❌ Error de conexión:", error)
  );

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Proyecto Integrador 2 funcionando",
    documentation: "/api-docs",
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;