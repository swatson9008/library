
let title;
let author;
let pages;
let read;

let submitB = document.getElementById("submitB")
let titleB = document.getElementById("bookT")

let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


submitB.addEventListener ("click", function addBookToLibrary(event){
    event.preventDefault();
    console.log("testing");
    console.log(titleB.value);
    

});



/*function addBookToLibrary (event) {
    event.preventDefault();
    console.log("testing");



}*/