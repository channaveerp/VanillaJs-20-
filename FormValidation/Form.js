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

// show success message
function showSuccessMessage(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
// check email validity
function checkEmailValidation(input) {
  console.log('email input', input);
  const regx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regx.test(input.value.trim())) {
    showSuccessMessage(input);
  } else {
    showErrorMessage(input, 'Email is not valid');
  }
}

// all checkrequired inputs are required

function checkrequired(inputArray) {
  let isrequired = false;
  inputArray.forEach(function (input) {
    if (input.value.trim() === '') {
      showErrorMessage(input, `${getFieldName} is required`);
      isrequired = true;
    } else {
      showSuccessMessage(input);
    }
  });
  return isrequired;
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showErrorMessage(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showErrorMessage(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccessMessage(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showErrorMessage(input2, 'Passwords do not match');
  }
}

// form submit event listeners

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (checkrequired([email, username, password, confirmpassword])) {
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, confirmpassword);
  }
});
