function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");

// launch modal event/form
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "none";
}));

// Dom elements (global Variables)

const formModal = document.getElementById('form-modal');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const date = document.getElementById('birthdate');
const mail = document.getElementById('email');
const nbtour = document.getElementById('quantity');

const errorFirst = document.querySelector('.errorFirst');
const errorLast = document.querySelector('.errorLast');
const errorDate = document.querySelector('.errorDate');
const errorEmail = document.querySelector('.errorEmail');
const errorQty = document.querySelector('errorQuantity')

function resetError() {
  errorFirst.innerHTML = "";
  errorLast.innerHTML = "";
  errorDate.innerHTML = "";
  errorEmail.innerHTML = "";
}

//function de verifier si le nb de caractere > 2
function checkFirstName(value) {
  if(value && value.length > 2) {
    return true;
  } else {
    return false;
  }
}

//function de verifier si le nb de caractere > 2
function checkLastName(value) {
  if(value && value.length > 2) {
    return true;
  } else {
    return false;
  }
}

//function de verifier si le nb de caractere > 2
function checkBirthDate(value) {
  if(value && value.length > 2) {
    return true;
  } else {
    return false;
  }
}

//function check email
function checkEmail(value) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return String(value)
  .toLowerCase()
  .match(pattern);
}

formModal.addEventListener('submit', event => {
  event.preventDefault();
  resetError();
  
  if(!checkFirstName(firstName.value)) {
    errorFirst.innerHTML = 'pas ok';
    errorFirst.style.color = 'red';
    errorFirst.fontSize = '0.8rem';
  } else {
    errorFirst.innerHTML = 'ok';
    errorFirst.style.color = 'green';
    errorFirst.fontSize = '0.8rem';
  }

  if(!checkLastName(lastName.value)) {
    errorLast.innerHTML = 'pas ok';
    errorLast.style.color = 'red';
    errorLast.fontSize = '0.8rem';
  } else {
    errorLast.innerHTML = 'ok';
    errorLast.style.color = 'green';
    errorLast.fontSize = '0.8rem';
  }

  if(!checkBirthDate(birthdate.value)) {
    errorDate.innerHTML = 'pas ok';
    errorDate.style.color = 'red';
    errorDate.fontSize = '0.8rem';
  } else {
    errorDate.innerHTML = 'ok';
    errorDate.style.color = 'green';
    errorDate.fontSize = '0.8rem';
  }

  if(!checkEmail(email.value)) {
    errorEmail.innerHTML = 'pas ok';
    errorEmail.style.color = 'green';
    errorEmail.fontSize = '0.8rem';
  } else {
    errorEmail.innerHTML = 'ok';
    errorEmail.style.color = 'green';
    errorEmail.fontSize = '0.8rem';
  }
});
