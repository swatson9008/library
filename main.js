
let title
let author
let pages
let read
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






class book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read

    }
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
    console.log(myLibrary.indexOf(newBook));
    titleB.value = authorB.value = pageB.value = "";
    bookUpdate();
    

    
});

function bookUpdate(){
    bookArea.innerHTML = "";
    myLibrary.forEach(element => {
        
        let sectionCreate = document.createElement("div");
        sectionCreate.classList.add("BookList");
        sectionCreate.id = myLibrary.indexOf(element);
        sectionID = sectionCreate.id;
        console.log(myLibrary[sectionID].read);
        sectionCreate.innerHTML = 
            "<h4>Title:</h4>" + element.title + "<p>" +
            "<h4>Author:</h4>" + element.author + "<p>" +
            "<h4>Pages:</h4>" + element.pages + "<p>";
            bookArea.appendChild(sectionCreate);
            if (element.read === true) {
                let trueClass = document.createElement("div");
                trueClass.classList.add("trueClass");
                trueClass.innerHTML =
                "Finished! <p>";
                sectionCreate.appendChild(trueClass);}
            else {
                let falseClass = document.createElement("div");
                falseClass.classList.add("falseClass");
                falseClass.innerHTML =
                "Unread <p> Did you finish?" +
                "<input type='checkbox' id='readCheck'>";
                sectionCreate.appendChild(falseClass);
                let readCheck = document.getElementById("readCheck");
                readCheck.addEventListener("click", e => removeCheck(e, sectionID));
                function removeCheck(e) {
                    
                    e.stopPropagation();
                    myLibrary[sectionID].read = !(myLibrary[sectionID].read);
                    console.log(myLibrary[sectionID].read);
                    bookUpdate();
                };
            };
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete Book?";
            deleteBtn.id = sectionCreate.id;
            console.log(deleteBtn.id);
            let deleteID = deleteBtn.id;
            sectionCreate.appendChild(deleteBtn);
            let deleteBTN = document.getElementById(deleteID);
            deleteBTN.addEventListener("click", e => removeCard(e, deleteID));
            function removeCard(e){
               
                e.stopPropagation();
                let index = deleteID;
                myLibrary.splice(index, 1);
                bookUpdate();
            };
            
           
        
    });
}



