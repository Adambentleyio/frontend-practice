const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// show input success border

function showSucces(input) {
    console.log("This was successful");
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check whether email input is a valid email address

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// event listeners

form.addEventListener('submit', function(e) {
    e.preventDefault();

   if (username.value === '') {
    showError(username, 'Username is required');
   } else {
       showSucces(username);
          }
   
   if (email.value === '') {
    showError(email, 'email is required');
   } else if (!isValidEmail(email.value)) {
    showError(email, 'email is not valid');
   } else {
    showSucces(email);
   }

   if (password.value === '') {
    showError(password, 'Password is required');
   } else {
       showSucces(password);
   }

   if (password2.value === '') {
    showError(password2, 'password is required');
   } else {
       showSucces(password2);
   }

    }
);