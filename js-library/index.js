let myLibrary = ['Great Gatsby', 'Huckleberry Finn'];



myLibrary.forEach(printCollection)

function book () {
  // the constructor

}

  // check we can store input value from input field
  const inputValue = document.querySelector('#input');
  console.log(inputValue.value);
  const inputBtn = document.querySelector('#inputBtn');
  inputBtn.addEventListener('click', e => {
    let bookTitle = inputValue.value;
    console.log(bookTitle);
    printCollection(bookTitle);
  });


function addToCollection () {
  // function to add a new book to the library after pressing button


  printCollection();

}

function printCollection (book) {

  // document.getElementById('library').innerHTML += `<div> ${book} </div>`;
  let bookContainer = document.querySelector('#library');
  let content = document.createElement('h3');
  content.textContent = book;
  bookContainer.appendChild(content);


  // loop trough library array and print information from each book to a card div

  // make variable to store add element function

    // do something with each array item

}



