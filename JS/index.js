console.log("This is JS File for College Library Project");

// Create Book Constructor
function Book(name,author,type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function display() {

}

// Add Method to display prototype

// Add Submit Event Listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

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
    } else if(learning.checked) {
        type = learning.value;
    } else if(scientist.checked) {
        type = scientist.value;
    }
    // console.log("Name = " + name + " Author = " + author + " type = " + type);
    
    // Create Book Object
    let book = new Book(name,author,type);
    console.log(typeof book);

    // When any form is sbumitted page is reloaded, In order to avoid reload use preventDefault()
    e.preventDefault();
}