
let title;
let author;
let pages;
let read;
let unread
let complete
let readC




let submitB = document.getElementById("submitB")
let titleB = document.getElementById("bookT")
let authorB = document.getElementById("authorName")
let pageB = document.getElementById("pagesNo")
let readB = document.getElementById("readConfirm")

let bookArea = document.getElementById("bookArea")
let bookTArea = document.getElementById("bookTitles")

let myLibrary = [];

let sectionCreate = document.createElement("div")


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
    newBook.read = readB.checked;
    myLibrary.push(newBook);
    console.log(myLibrary);
    titleB.value = authorB.value = pageB.value = "";
    bookUpdate();
    

    
});

function bookUpdate(){
    bookArea.innerHTML = "";
    myLibrary.forEach(element => {
        
        let sectionCreate = document.createElement("div");
        sectionCreate.classList.add("BookList");
        sectionCreate.innerHTML = 
            "<h4>Title:</h4>" + element.title + "<p>" +
            "<h4>Author:</h4>" + element.author + "<p>" +
            "<h4>Pages:</h4>" + element.pages + "<p>" +
            "<h4>Have you read it?</h4>" + element.read + "<p>" +
            "<button>delete book</button>";
        document.querySelector("button").classList.add("deletebtn");
        bookArea.appendChild(sectionCreate);
    });
    

    /*bookArea.appendChild(sectionCreate)*/
}
