
let title;
let author;
let pages;
let read;

let submitB = document.getElementById("submitB")
let titleB = document.getElementById("bookT")
let authorB = document.getElementById("authorName")
let pageB = document.getElementById("pagesNo")

let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}


submitB.addEventListener ("click", function addBookToLibrary(event){
    event.preventDefault();
    newBook = Object.create(book);
    newBook.title = titleB.value;
    newBook.author = authorB.value;
    newBook.pages = pageB.value;
    console.log(newBook.title);
    myLibrary = Object.values(newBook);
    console.log(myLibrary);

    
    

});



/*function addBookToLibrary (event) {
    event.preventDefault();
    console.log("testing");



}*/