const request = require("supertest");

const app = require("../app");
const pool = require("../config/db");

describe("API MiniBlog", () => {
  describe("GET /", () => {
    it("debe confirmar que la API funciona", async () => {
      const response = await request(app).get("/");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "API Proyecto Integrador 2 funcionando",
      });
    });
  });

  describe("GET /authors", () => {
    it("debe devolver una lista de autores", async () => {
      const response = await request(app).get("/authors");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /authors/:id", () => {
    it("debe devolver un autor existente", async () => {
      const response = await request(app).get("/authors/1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", 1);
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("email");
    });

    it("debe devolver 404 cuando el autor no existe", async () => {
      const response = await request(app).get("/authors/999999");

      expect(response.status).toBe(404);
    });
  });

  describe("GET /posts", () => {
    it("debe devolver una lista de posts", async () => {
      const response = await request(app).get("/posts");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /posts/:id", () => {
    it("debe devolver un post existente con su autor", async () => {
      const response = await request(app).get("/posts/1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", 1);
      expect(response.body).toHaveProperty("author_id");
      expect(response.body).toHaveProperty("author_name");
    });

    it("debe devolver 404 cuando el post no existe", async () => {
      const response = await request(app).get("/posts/999999");

      expect(response.status).toBe(404);
    });
  });

  describe("Validaciones", () => {
    it("debe rechazar un autor sin nombre", async () => {
      const response = await request(app)
        .post("/authors")
        .send({
          email: "test-sin-nombre@example.com",
          bio: "Autor inválido",
        });

      expect(response.status).toBe(400);
    });

    it("debe rechazar un post sin título", async () => {
      const response = await request(app)
        .post("/posts")
        .send({
          content: "Contenido sin título",
          author_id: 1,
          published: false,
        });

      expect(response.status).toBe(400);
    });
  });

  afterAll(async () => {
    await pool.end();
  });
});