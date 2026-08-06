# 📚 Proyecto Integrador 2 - MiniBlog API

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** para la gestión de autores y publicaciones de un MiniBlog.

Este proyecto fue desarrollado como parte del **Proyecto Integrador 2**.

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- Swagger UI Express
- OpenAPI 3.0
- Vitest
- Supertest
- Git
- GitHub

---

# 📁 Estructura del proyecto

```
proyecto-integrador-2
│
├── docs
│   ├── openapi.json
│   ├── swagger.js
│   └── swagger.yaml
│
├── sql
│   ├── setup.sql
│   └── seed.sql
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authorsController.js
│   │   └── postsController.js
│   │
│   ├── middlewares
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   │
│   ├── routes
│   │   ├── authorsRoutes.js
│   │   └── postsRoutes.js
│   │
│   ├── services
│   │   ├── authorsService.js
│   │   └── postsService.js
│   │
│   ├── tests
│   │   └── api.test.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── package.json
└── README.md
```

---

# ⚙️ Instalación

Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto

```bash
cd proyecto-integrador-2
```

Instalar dependencias

```bash
npm install
```

---

# 🔐 Variables de entorno

Crear un archivo `.env` utilizando como base `.env.example`.

Ejemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=miniblog
PORT=3000
```

---

# 🗄️ Base de datos

Crear la base de datos en PostgreSQL.

Ejecutar:

```
sql/setup.sql
```

Luego ejecutar:

```
sql/seed.sql
```

---

# ▶️ Ejecutar el proyecto

Modo desarrollo

```bash
npm run dev
```

Modo producción

```bash
npm start
```

---

# 🧪 Ejecutar pruebas

```bash
npm test
```

Las pruebas fueron desarrolladas con:

- Vitest
- Supertest

---

# 📖 Documentación Swagger

Con el servidor iniciado:

```
http://localhost:3000/api-docs
```

Allí se encuentra disponible toda la documentación interactiva de la API.

---

# 📌 Endpoints

## Authors

| Método | Endpoint | Descripción |
|---------|----------|-------------|
| GET | /authors | Obtener todos los autores |
| GET | /authors/:id | Obtener un autor |
| POST | /authors | Crear un autor |
| PUT | /authors/:id | Actualizar un autor |
| DELETE | /authors/:id | Eliminar un autor |

---

## Posts

| Método | Endpoint | Descripción |
|---------|----------|-------------|
| GET | /posts | Obtener todos los posts |
| GET | /posts/:id | Obtener un post |
| GET | /posts/author/:authorId | Obtener posts de un autor |
| POST | /posts | Crear un post |
| PUT | /posts/:id | Actualizar un post |
| DELETE | /posts/:id | Eliminar un post |

---

# ✅ Funcionalidades implementadas

- CRUD completo de autores
- CRUD completo de publicaciones
- Relación entre autores y publicaciones
- PostgreSQL
- Arquitectura en capas
- Controllers
- Services
- Routes
- Middlewares
- Manejo de errores
- Validaciones
- Swagger
- Tests automáticos
- Variables de entorno

---

# 👩‍💻 Autora

**Marina Casal**

Proyecto desarrollado para el Proyecto Integrador 2 utilizando Node.js, Express y PostgreSQL.