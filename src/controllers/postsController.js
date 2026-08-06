const postsService = require("../services/postsService");
const authorsService = require("../services/authorsService");

const getAllPosts = async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();

    return res.status(200).json(posts);
  } catch (error) {
    console.error("Error al obtener posts:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await postsService.getPostById(id);

    if (!post) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error("Error al obtener post:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const getPostsByAuthorId = async (req, res) => {
  try {
    const { authorId } = req.params;

    const author = await authorsService.getAuthorById(authorId);

    if (!author) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    const posts = await postsService.getPostsByAuthorId(authorId);

    return res.status(200).json(posts);
  } catch (error) {
    console.error("Error al obtener posts del autor:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "El título es obligatorio",
      });
    }

    if (!content || !content.trim()) {
      return res.status(400).json({
        message: "El contenido es obligatorio",
      });
    }

    if (!author_id) {
      return res.status(400).json({
        message: "El author_id es obligatorio",
      });
    }

    if (
      published !== undefined &&
      typeof published !== "boolean"
    ) {
      return res.status(400).json({
        message: "published debe ser true o false",
      });
    }

    const author = await authorsService.getAuthorById(author_id);

    if (!author) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    const newPost = await postsService.createPost({
      title: title.trim(),
      content: content.trim(),
      author_id,
      published: published ?? false,
    });

    return res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al crear post:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author_id, published } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "El título es obligatorio",
      });
    }

    if (!content || !content.trim()) {
      return res.status(400).json({
        message: "El contenido es obligatorio",
      });
    }

    if (!author_id) {
      return res.status(400).json({
        message: "El author_id es obligatorio",
      });
    }

    if (typeof published !== "boolean") {
      return res.status(400).json({
        message: "published debe ser true o false",
      });
    }

    const author = await authorsService.getAuthorById(author_id);

    if (!author) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    const updatedPost = await postsService.updatePost(id, {
      title: title.trim(),
      content: content.trim(),
      author_id,
      published,
    });

    if (!updatedPost) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error al actualizar post:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await postsService.deletePost(id);

    if (!deletedPost) {
      return res.status(404).json({
        message: "Post no encontrado",
      });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar post:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthorId,
  createPost,
  updatePost,
  deletePost,
};