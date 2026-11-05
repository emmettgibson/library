const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages= pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

//Object.getPrototypeOf(myLibrary[0]) === Book.prototype;

addBookToLibrary("Go, Dog. Go!", "P.D. Eastman", 64, "Yes");
addBookToLibrary("Holes", "Louis Sachar", 233, "Yes");
addBookToLibrary("Musashi", "Eiji Yoshikawa", 970, "No");
addBookToLibrary("Uzumaki", "Junji Ito", 653, "Yes");



/*
const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

let title = document.createElement("p");
title.textContent = `Title: ${myLibrary[0].title}`
content.appendChild(title);

let author = document.createElement("p");
author.textContent = `Author: ${myLibrary[0].author}`
content.appendChild(author);

let pages = document.createElement("p");
pages.textContent = `Pages: ${myLibrary[0].pages}`
content.appendChild(pages);

let read = document.createElement("p");
read.textContent = `Read: ${myLibrary[0].read}`
content.appendChild(read);
*/


for(let item in myLibrary) {
const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

let title = document.createElement("p");
title.textContent = `Title: ${myLibrary[item].title}`
content.appendChild(title);

let author = document.createElement("p");
author.textContent = `Author: ${myLibrary[item].author}`
content.appendChild(author);

let pages = document.createElement("p");
pages.textContent = `Pages: ${myLibrary[item].pages}`
content.appendChild(pages);

let read = document.createElement("p");
read.textContent = `Read: ${myLibrary[item].read}`
content.appendChild(read);
}

let newBook = document.querySelector("#newBook");
newBook.addEventListener("click", () => {
  alert("Hello");
})




















































/*
for(let item in myLibrary) {
alert(`
Title: ${myLibrary[item].title}
Author: ${myLibrary[item].author}
Pages: ${myLibrary[item].pages}
Read: ${myLibrary[item].read}
`)
}
*/

/*
word.textContent = (`
  Title: ${myLibrary[0].title}
  Author: ${myLibrary[0].author}
  Pages: ${myLibrary[0].pages}
  Read: ${myLibrary[0].read}
  `);
*/