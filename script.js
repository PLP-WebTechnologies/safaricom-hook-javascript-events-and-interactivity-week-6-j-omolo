// script.js

// 1. Interactive Button
const toggleButton = document.getElementById('toggleButton');
const body = document.body;
let isColor1 = true;

toggleButton.addEventListener('click', () => {
  body.style.backgroundColor = isColor1 ? 'lightblue' : 'lightcoral';
  isColor1 = !isColor1;
});

// 2. Slider with Real-Time Feedback
const sizeSlider = document.getElementById('sizeSlider');
const resizableText = document.getElementById('resizableText');

sizeSlider.addEventListener('input', () => {
  resizableText.style.fontSize = `${sizeSlider.value}px`;
});

// 3. Modal with Event Listeners
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// 4. Form Validation
const form = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
  let isValid = true;

  // Name Validation
  if (nameInput.value.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters long.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Password Validation
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent = 'Password must be at least 8 characters long, with one uppercase letter and one number.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (!isValid) {
    event.preventDefault();
  }
});

// 5. Bonus: Dropdown Menu
const dropdown = document.getElementById('dropdown');
const dropdownMessage = document.getElementById('dropdownMessage');

dropdown.addEventListener('change', () => {
  const selectedOption = dropdown.value;
  dropdownMessage.textContent = `You selected: ${selectedOption}`;
});