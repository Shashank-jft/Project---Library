console.log("This is JS")

function Book(title, author, type) {
    this.title = title;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add = function (book) {

    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;

    tableBody.innerHTML += uiString;

    console.log("Adding to UI")
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have summited the form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (fiction.checked) {
        type = cooking.value;
    }




    let book = new Book(name, author, type);
    console.log(book);


    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("SUCCESS")

    }

    else {
        display.show("Error")
    }
    e.preventDefault();
}
