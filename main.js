const btn = document.querySelector("button");
const form = document.querySelector("form");
const tableau = document.querySelector("table");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titre = document.querySelector("#titre").value;
  const auteur = document.querySelector("#auteur").value;

  // local storage
  const book = {
    titre,
    auteur,
  };
  const books = JSON.parse(sessionStorage.getItem("books")) || [];
  books.push(book);
  sessionStorage.setItem("books", JSON.stringify(books));

  form.reset();
  afficherLivres();
});

const afficherLivres = () => {
  const books = JSON.parse(localStorage.getItem("books")) || [];

  const tbody = document.querySelector("#book-list");

  tbody.innerHTML = "";

  books.forEach((book) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.titre}</td>
    <td>${book.auteur}</td>
    <td><button class="delete">X</button></td>
    `;
    tbody.appendChild(row);

    const deleteBtn = row.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      deleteBook(book.titre);
    });
  });
};

afficherLivres();

const deleteBook = (titre) => {
  const books = JSON.parse(localStorage.getItem("books")) || [];

  const newBooks = books.filter((book) => book.titre !== titre);

  localStorage.setItem("books", JSON.stringify(newBooks));
  afficherLivres();
};
