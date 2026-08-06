const swaggerUi = require("swagger-ui-express");
const openApiDocument = require("./openapi.json");

const setupSwagger = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(openApiDocument)
  );
};

module.exports = setupSwagger;