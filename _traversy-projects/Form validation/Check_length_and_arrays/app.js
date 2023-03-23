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

function showSuccess(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// shows that the field is not within the correct length range

function showLengthError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// check whether email input is a valid email address

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Checks an array of inputs are not empty 
// and displays success or error message. 

function checkRequired(inputArr){
    inputArr.forEach(function (input) {
        if (input.value == '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// check passwords match

function checkPasswordsMatch (input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords must match')
    }
}


// Uses the input id tag to display error message field 
// name during checkRequired    

function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Check length of input function on an array of inputs

function checkLength(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.length === 0) {
            showError(input, `${getFieldName(input)} is required`);
        }
        else if (input.value.length < 6 | input.value.length > 11) {
            showLengthError(input, `${getFieldName(input)} must be between 6 and 10`)
        } 
    })
}

// event listeners

form.addEventListener('submit', function(e) {
    e.preventDefault();

   checkRequired([username, email, password, password2]);
   checkLength([username, password]);
   checkPasswordsMatch(password, password2);

    }
);