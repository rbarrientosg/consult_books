const express = require("express");
const app = express();
const path = require("path");

/**
 * Puerto donde se ejecuta el servidor
 * @type {Number}
 * @example
 * const PORT = 3000;
 */
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "src/public")));

/**
 * Rutas definidas en el archivo routes.js
 * @type {express.Router}
 */
const routes = require("./src/routes");

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is listening in PORT: " + PORT);
});
