
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

  function changeReadStatus(value) {
    book.read = value;
  }

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

  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");
  content.appendChild(buttonDiv);

  let deleteBook = document.createElement("button");
  deleteBook.classList.add("deleteBook");
  deleteBook.textContent = "Delete book"
  buttonDiv.appendChild(deleteBook);
  deleteBook.addEventListener("click", () => {
  let areYouSure = confirm("Are you sure you want to delete this book?");
  if(areYouSure === true) {
  content.remove(content);
  for(let item in myLibrary) {
    if(myLibrary[item].id === book.id) {
      myLibrary.splice(item, 1);
      console.log(myLibrary);
    }
  }
}
  })


  let readStatus = document.createElement("button");
  readStatus.classList.add("readStatus");
  readStatus.textContent = "Read status"
  buttonDiv.appendChild(readStatus);
  readStatus.addEventListener("click", () => {
  let backGround = document.createElement("div");
  backGround.classList.add("backGround");
  document.body.appendChild(backGround);
  let readStatusChange = document.createElement("div");
  readStatusChange.classList.add("readStatusChange");
  backGround.appendChild(readStatusChange);
  let headerDiv = document.createElement("div");
  headerDiv.classList.add("headerDiv");
  let header = document.createElement("p");
  header.textContent = "Change the read status for this book";
  headerDiv.appendChild(header);
  readStatusChange.appendChild(headerDiv);
  let closeButton = document.createElement("img");
  closeButton.classList.add("button");
  closeButton.setAttribute("id", "closeButton")
  closeButton.src = "close-x-svgrepo-com(1).svg";
  headerDiv.appendChild(closeButton);

  let buttonDivReadStatus = document.createElement("div");
  buttonDivReadStatus.classList.add("buttonDivReadStatus");
  readStatusChange.appendChild(buttonDivReadStatus);

  let yesButton = document.createElement("button");
  yesButton.classList.add("button");
  yesButton.setAttribute("id", "yesButton");
  yesButton.textContent = "Yes";
  yesButton.style.zIndex = 1000;
  buttonDivReadStatus.appendChild(yesButton);
  yesButton.addEventListener("click", () => {

  changeReadStatus(yesButton.textContent);
  content.appendChild(titleCreate);
  content.appendChild(authorCreate);
  content.appendChild(pagesCreate);
  readCreate.textContent = `Read: ${yesButton.textContent}`;
  content.appendChild(readCreate);
  content.appendChild(buttonDiv);
  document.body.removeChild(backGround);
  backGround.removeChild(readStatusChange);
  console.log(myLibrary);

  })

  let noButton = document.createElement("button");
  noButton.classList.add("button");
  noButton.setAttribute("id", "noButton");
  noButton.textContent = "No";
  noButton.style.zIndex = 1000;
  buttonDivReadStatus.appendChild(noButton);
  noButton.addEventListener("click", () => {

    changeReadStatus(noButton.textContent);
    content.appendChild(titleCreate);
    content.appendChild(authorCreate);
    content.appendChild(pagesCreate);
    readCreate.textContent = `Read: ${noButton.textContent}`;
    content.appendChild(readCreate);
    content.appendChild(buttonDiv);
    document.body.removeChild(backGround);
    backGround.removeChild(readStatusChange);
  
    })

  let currentlyReading = document.createElement("button");
  currentlyReading.classList.add("button")
  currentlyReading.setAttribute("id", "currentlyReading");
  currentlyReading.textContent = "Currently reading";
  currentlyReading.style.zIndex = 1000;
  buttonDivReadStatus.appendChild(currentlyReading);
  currentlyReading.addEventListener("click", () => {
    changeReadStatus(currentlyReading.textContent);
    content.appendChild(titleCreate);
    content.appendChild(authorCreate);
    content.appendChild(pagesCreate);
    readCreate.textContent = `Read: ${currentlyReading.textContent}`;
    content.appendChild(readCreate);
    content.appendChild(buttonDiv);
    document.body.removeChild(backGround);
    backGround.removeChild(readStatusChange);
    });

  let wantToRead = document.createElement("button");
  wantToRead.classList.add("button")
  wantToRead.setAttribute("id", "wantToRead");
  wantToRead.textContent = "Want to read";
  wantToRead.style.zIndex = 1000;
  buttonDivReadStatus.appendChild(wantToRead);
  wantToRead.addEventListener("click", () => {
    changeReadStatus(wantToRead.textContent);
    content.appendChild(titleCreate);
    content.appendChild(authorCreate);
    content.appendChild(pagesCreate);
    readCreate.textContent = `Read: ${wantToRead.textContent}`;
    content.appendChild(readCreate);
    content.appendChild(buttonDiv);
    document.body.removeChild(backGround);
    backGround.removeChild(readStatusChange);
    });

  closeButton.addEventListener("click", () => {
    document.body.removeChild(backGround);
    backGround.removeChild(readStatusChange);
  })
  })


//Clears form values
title.value = null;
author.value = null;
pages.value = null;
read.checked = null;
}
})
