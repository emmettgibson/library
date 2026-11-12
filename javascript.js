
/*
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
*/




/*
addBookToLibrary("Go, Dog. Go!", "P.D. Eastman", 64, "Yes");
addBookToLibrary("Holes", "Louis Sachar", 233, "Yes");
addBookToLibrary("Musashi", "Eiji Yoshikawa", 970, "No");
addBookToLibrary("Uzumaki", "Junji Ito", 653, "Yes");
*/

/*
let newBook = document.querySelector("#newBook");
newBook.addEventListener("click", () => {
let titlePrompt = prompt("Title?");
let authorPrompt = prompt("Author?");
let pagePrompt = prompt("Number of pages?");
let readPrompt = prompt("Have your read this book?")

addBookToLibrary(titlePrompt, authorPrompt, pagePrompt, readPrompt)

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
});
*/

  /*
newBook.addEventListener("click", () => {
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
addBookToLibrary(prompt("Title?"), prompt("Author?"), prompt("Pages?"), prompt("Read?"))

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
  const content = document.createElement("div");
  content.classList.add("content");
  document.body.appendChild(content);

  let deleteBook = document.createElement("button");
  deleteBook.textContent = "Delete book"
  content.appendChild(deleteBook);

});
*/















//myLibrary is creating an array for each item
/*
newBook.addEventListener("click", () => {
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
  
  addBookToLibrary(prompt("Title?"), prompt("Author?"), prompt("Pages?"), prompt("Read?"))
  
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
  
    let deleteBook = document.createElement("button");
    deleteBook.textContent = "Delete book"
    content.appendChild(deleteBook);
    deleteBook.addEventListener("click", () => {
    content.remove(content);
      for (let item in myLibrary) {
        myLibrary.splice(item, 1)
        console.log(myLibrary[item])
    }
    })
    let checkArray = document.createElement("button");
    checkArray.textContent = "Check array";
    content.appendChild(checkArray);
    checkArray.addEventListener("click", () => {
        for (let item in myLibrary) {
          console.log(myLibrary)
      }
    });
    } 
  });
*/
/*
let array = [1, 2, 3, 4];

for (let item in array) {
    if (array[item] === 3) {
        array.splice(item, 1)
    }
};
*/


















//Prompt button
/*
newBook.addEventListener("click", () => {

  let title = prompt("Title?");
  let author = prompt("Author?");
  let pages = prompt("Page number?");
  let read = prompt("Read?");

  let book = addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);
  console.log(`book = ${book.id}`);

  const content = document.createElement("div");
  content.classList.add("content");
  document.body.appendChild(content);
  
  let titleCreate = document.createElement("p");
  titleCreate.textContent = `Title: ${title}`
  content.appendChild(titleCreate);
  
  let authorCreate = document.createElement("p");
  authorCreate.textContent = `Author: ${author}`
  content.appendChild(authorCreate);
  
  let pagesCreate = document.createElement("p");
  pagesCreate.textContent = `Pages: ${pages}`
  content.appendChild(pagesCreate);
  
  let readCreate = document.createElement("p");
  readCreate.textContent = `Read: ${read}`
  content.appendChild(readCreate);



  

  let deleteBook = document.createElement("button");
  deleteBook.textContent = "Delete book"
  content.appendChild(deleteBook);
  deleteBook.addEventListener("click", () => {
  content.remove(content);
  for(let item in myLibrary) {
    if(myLibrary[item].id === book.id) {
      myLibrary.splice(item, 1);
      console.log(myLibrary);
    }
  }
  })

})
*/









let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages= pages;
  this.read = read;
  this.id = crypto.randomUUID();
}
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return newBook;
}

newBook.addEventListener("click", (event) => {

  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#read");

if (title.value !== "" && author.value !== "" && pages.value !== "") {

  event.preventDefault();

  let book = addBookToLibrary(title.value, author.value, pages.value, read.value);
  console.log(myLibrary);
  console.log(`book = ${book.id}`);

  const content = document.createElement("div");
  content.classList.add("content");
  document.body.appendChild(content);
  
  let titleCreate = document.createElement("p");
  titleCreate.textContent = `Title: ${title.value}`
  content.appendChild(titleCreate);
  
  let authorCreate = document.createElement("p");
  authorCreate.textContent = `Author: ${author.value}`
  content.appendChild(authorCreate);
  
  let pagesCreate = document.createElement("p");
  pagesCreate.textContent = `Pages: ${pages.value}`
  content.appendChild(pagesCreate);
  
  let readCreate = document.createElement("p");

  readCreate.textContent = `Read: ${read.value}`;
  content.appendChild(readCreate);

  let deleteBook = document.createElement("button");
  deleteBook.textContent = "Delete book"
  content.appendChild(deleteBook);
  deleteBook.addEventListener("click", () => {
  content.remove(content);
  for(let item in myLibrary) {
    if(myLibrary[item].id === book.id) {
      myLibrary.splice(item, 1);
      console.log(myLibrary);
    }
  }
  })

title.value = null;
author.value = null;
pages.value = null;
read.checked = null;
}




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