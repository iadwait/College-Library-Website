// This is JS implementation of Project using Prototype and Constructors
console.log("This is JS File for College Library Project");

// Create Book Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add Method to Display prototype
// Function to add Book in table
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('bookDetailsTableBody');
    let tableBodyHTML = `
        <tr>
            <th scope="row">1</th>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
         </tr>
    `
    tableBody.innerHTML += tableBodyHTML;
}

// Function to Clear Form Data
Display.prototype.clear = function () {
    // Reset Library Form Fields
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset(); // reset will erase/reset all form fields
}

// Function to validate if all the fields are entered by the user
Display.prototype.validate = function (book) {
    // Check if Book Name is not Blank
    if (book.name == "") {
        return false
    }
    // Check if Book Authur is not Blank
    if (book.author == "") {
        return false
    }
    return true;
}

// Function to show alert messages
Display.prototype.show = function (type, message) {
    let alertBox = document.getElementById('alertMessage');
    alertHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
     ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
    alertBox.innerHTML = alertHTML;
    
    // After 4 Seconds remove Alert Message
    setTimeout(function () {
        alertBox.innerHTML = ``;
    }, 5000);
}


// Add Submit Event Listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("Form Submitted");
    // Get Values for Name Author and Type
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;

    // Programming Learning Scientist - Radio buttons ID
    let programming = document.getElementById('Programming');
    let learning = document.getElementById('Learning');
    let scientist = document.getElementById('Scientist');
    let type;

    // Check which checkBox is Checked
    if (programming.checked) {
        type = programming.value;
    } else if (learning.checked) {
        type = learning.value;
    } else if (scientist.checked) {
        type = scientist.value;
    }
    // console.log("Name = " + name + " Author = " + author + " type = " + type);

    // Create Book Object
    let book = new Book(name, author, type);
    //  console.log(book);

    // Display Book on UI
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.show('success', "Book has been successfully added in library !!");
        display.clear();
    } else {
        // Show Error
        display.show('danger', "Please input all fields to add a Book !!");
        // console.log('Error Enter all the Fields');
    }

    // When any form is sbumitted page is reloaded, In order to avoid reload use preventDefault()
    e.preventDefault();
}