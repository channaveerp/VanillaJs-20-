const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('conformpassword');

// show error message

function showErrorMessage(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = document.querySelector('small');
  small.innerText = message;
}

function showSuccessMessage(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
