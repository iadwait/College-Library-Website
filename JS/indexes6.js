// This is JS implementation of Project using ES6 version
console.log("This is JS File with ES6 Version of JS");

// Create Array to Store Books data
let arrBooks = [];

// Create Book Class
class Book {
    // Constructor
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

}

// Create Display Class to manage UI
class Display {

    // Function to add Book in table
    add(book) {
        let tableBody = document.getElementById('bookDetailsTableBody');
        let tableBodyHTML = `
            <tr>
                <th scope="row">${arrBooks.length + 1}</th>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
             </tr>
        `
        tableBody.innerHTML += tableBodyHTML;
        // Add Book to books array to store in local storage
        arrBooks.push(book);
        // Save to local storage
        localStorage.setItem('books',JSON.stringify(arrBooks));
    }

    // Function to Display All Books from Books Array
    static displayAll() {
        // Retrive Notes Key Data from Local Storage
        let booksData = localStorage.getItem('books');
        // Check if books data is present
        if (booksData == null) {
            arrBooks = [];
        } else {
            arrBooks = JSON.parse(booksData);
        }

        let tableBody = document.getElementById('bookDetailsTableBody');
        let tableBodyHTML = '';
        arrBooks.forEach(function (element, index) {
            tableBodyHTML += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
         </tr>`
        });
        tableBody.innerHTML = tableBodyHTML;
    }

    // Function to Clear Form Data
    clear() {
        // Reset Library Form Fields
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset(); // reset will erase/reset all form fields
    }

    // Function to validate if all the fields are entered by the user
    validate(book) {
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
    show(type, message) {
        let boldText = 'Message';
        let alertBox = document.getElementById('alertMessage');

        if (type === 'success') {
            boldText = 'Success:';
        } else if (type === 'danger') {
            boldText = 'Error!';
        }
        let alertHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
         <strong>${boldText} </strong>${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        alertBox.innerHTML = alertHTML;

        // After 4 Seconds remove Alert Message
        setTimeout(function () {
            alertBox.innerHTML = ``;
        }, 5000);
    }

}

// Function to get Books from Local Storage and Display
Display.displayAll();


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