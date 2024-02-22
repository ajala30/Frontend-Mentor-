const form = document.getElementById('subscribeForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const password2Error = document.getElementById('password2Error');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  validateForm();
});

function validateForm() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (emailValue === '') {
    showError(email, emailError, 'Email cannot be blank');
  } else if (!isValidEmail(emailValue)) {
    showError(email, emailError, 'Please enter a valid email');
  } else {
    showSuccess(email, emailError);
  }

  if (passwordValue === '') {
    showError(password, passwordError, 'Password cannot be blank');
  } else if (!isValidPassword(passwordValue)) {
    showError(password, passwordError, 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number');
  } else {
    showSuccess(password, passwordError);
  }

  if (password2Value === '') {
    showError(password2, password2Error, 'Please confirm your password');
  } else if (passwordValue !== password2Value) {
    showError(password2, password2Error, 'Passwords do not match');
  } else {
    
    window.location.href = 'success.html';
  }
}

function showError(input, errorField, message) {
  input.style.borderColor = 'red';
  errorField.innerText = message;
  errorField.style.display = 'block';
}

function showSuccess(input, errorField) {
  input.style.borderColor = '';
  errorField.innerText = '';
  errorField.style.display = 'none';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}


