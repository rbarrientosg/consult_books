const inputAuthor = document.getElementById("input-author");
const inputTitle = document.getElementById("input-title");

const buttonSearch = document.getElementById("button-search");
buttonSearch.addEventListener("click", () => {
  const author = inputAuthor.value !== "" ? `/${inputAuthor.value}` : "/-";
  const title = inputTitle.value !== "" ? `/${inputTitle.value}` : "";

  consultBook("http://localhost:3000/books" + author + title);
});

/**
 * Consulta libro y renderiza la información en el DOM
 * @param {String} url URL Endpoint de consulta Libro
 * @returns {void} No retorna ningun tipo de dato
 */
function consultBook(url) {
  const outputSearch = document.getElementById("output-search");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var output = "";
      data.forEach((book) => {
        output += `<div class="book">
        <div id="book-info">
          <p class="book-atr">Title: </p>
          <p class="description">${book.title}</p>
          <p class="book-atr">Author: </p>
          <p class="description">${book.author}</p>
          <p class="book-atr">Stock: </p>
          <p class="description">${book.stock}</p>
        </div>
        <div id="book-cover">
          <img src="${book.cover}" alt="Book cover">
        </div>
      </div>`;
      });
      outputSearch.innerHTML = output;
    })
    .catch((error) => console.log("Error", error));
}
