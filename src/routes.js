const express = require("express");
/**
 * Enrutamiento de Express
 * @type {express.Router}
 */
const router = express.Router();
/**
 * Obtiene el Path del archivo routes.js, necesario para concatenar rutas de archivos
 * @type {path}
 */
const path = require("path");
/**
 * Obtiene la BD de libros
 * @type {Array<Book>}
 */
const books = require("./models/books");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/books/:author?/:title?", (req, res) => {
  const { author, title } = req.params;
  const booksSearched = [];

  const isTheAuthor = books.find((book) => book.author.includes(author));
  const isTheTitle = books.find((book) => book.title.includes(title));

  if (isTheAuthor !== undefined) {
    booksSearched.push(isTheAuthor);
  }
  if (isTheTitle !== undefined) {
    booksSearched.push(isTheTitle);
  }

  res.json(booksSearched);
});

/**
 * Define la ruta del archivo index.html de la Documentación
 * @type {String}
 */
const filePath = path.join(__dirname, "./docs/index.html");

router.get("/docs", (req, res) => {
  res.sendFile(filePath);
});

module.exports = router;
