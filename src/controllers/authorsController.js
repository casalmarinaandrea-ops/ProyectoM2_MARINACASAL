const authorsService = require("../services/authorsService");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await authorsService.getAllAuthors();

    return res.status(200).json(authors);
  } catch (error) {
    console.error("Error al obtener autores:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await authorsService.getAuthorById(id);

    if (!author) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    return res.status(200).json(author);
  } catch (error) {
    console.error("Error al obtener autor:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "El nombre es obligatorio",
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        message: "El email es obligatorio",
      });
    }

    const newAuthor = await authorsService.createAuthor({
      name: name.trim(),
      email: email.trim(),
      bio,
    });

    return res.status(201).json(newAuthor);
  } catch (error) {
    console.error("Error al crear autor:", error);

    if (error.code === "23505") {
      return res.status(400).json({
        message: "El email ya está registrado",
      });
    }

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, bio } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "El nombre es obligatorio",
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        message: "El email es obligatorio",
      });
    }

    const updatedAuthor = await authorsService.updateAuthor(id, {
      name: name.trim(),
      email: email.trim(),
      bio,
    });

    if (!updatedAuthor) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    return res.status(200).json(updatedAuthor);
  } catch (error) {
    console.error("Error al actualizar autor:", error);

    if (error.code === "23505") {
      return res.status(400).json({
        message: "El email ya está registrado",
      });
    }

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAuthor = await authorsService.deleteAuthor(id);

    if (!deletedAuthor) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar autor:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};