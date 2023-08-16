/**
 * Base de Datos de libros simulada
 * @module MyBooksDB
 */

/**
 * Nuevo objecto de tipo Book
 * @typedef {Object} Book
 * @property {Number} id - Identificador del libro
 * @property {String} title - Título del libro
 * @property {String} author - Autor del libro
 * @property {String} stock - Stock del libro
 * @property {String} cover - Portada del libro
 * @example
 * const book = {
 *  id: 0,
 *  title: "El Gran Gatsby",
 *  author: "F. Scott Fitzgerald",
 *  stock: "Disponible",
 *  cover: "https://{page}/{file}"
 * }
 */

/**
 * Lista de libros simulando una Base de Datos
 * @type {Array<Book>}
 */
const books = [
  {
    id: 0,
    title: "El Gran Gatsby",
    author: "F. Scott Fitzgerald",
    stock: "Disponible",
    cover:
      "https://th.bing.com/th/id/R.9268552a68f3d99be483493526cdfab7?rik=pp0NaFlw7jELPg&pid=ImgRaw&r=0",
  },
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    stock: "Agotado",
    cover:
      "https://th.bing.com/th/id/OIP.Z5KLQbybGAxlM5JdjOWeWwAAAA?pid=ImgDet&rs=1",
  },
  {
    id: 2,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    stock: "Disponible",
    cover:
      "https://th.bing.com/th/id/R.938c16d580f65d466de44d9f2ec98732?rik=kqLcyYNhyB9XcQ&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    stock: "Disponible",
    cover:
      "https://th.bing.com/th/id/R.f9d0e8235bd327a52fff09f3a9771d2a?rik=kTe%2fl5faxwm7ag&pid=ImgRaw&r=0",
  },
];

/**
 * @type {Book}
 */
const book = {
  id: 4,
  title: "Don Quijote de la Mancha",
  author: "Miguel de Cervantes",
  stock: "Agotado",
  cover: "https://imagessl5.casadellibro.com/a/l/t0/45/9788466236645.jpg",
};

books.push(book);

module.exports = books;
