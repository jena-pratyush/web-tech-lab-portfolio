const loadBooksButton = document.getElementById("loadBooks");
const bookGrid = document.getElementById("bookGrid");

function renderBooks(books) {
  bookGrid.innerHTML = books.map((book) => {
    return `
      <article class="book-card">
        <span>${book.category}</span>
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <strong>Published: ${book.year}</strong>
      </article>
    `;
  }).join("");
}

loadBooksButton.addEventListener("click", () => {
  bookGrid.innerHTML = "<p class=\"status-message\">Loading book data...</p>";

  $.ajax({
    url: "books.json",
    method: "GET",
    dataType: "json",
    success(data) {
      renderBooks(data);
    },
    error() {
      bookGrid.innerHTML = "<p class=\"status-message warning-text\">Book data could not be loaded. Run this page through a local server if the browser blocks file fetch.</p>";
    }
  });
});
