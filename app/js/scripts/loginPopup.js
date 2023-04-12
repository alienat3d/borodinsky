/* jshint -W097 */
"use strict";

const loginLink = document.querySelector(".user-navigation-login-link");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector("form");
const loginLogin = loginPopup.querySelector("[name=login]");
const loginPassword = loginPopup.querySelector("[name=password]");

// Checking if localStorage available in user’s browser.
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (error) {
  isStorageSupport = false;
}

// Opens login pop-up window by click on Login-button in header-navigation menu & focus on form input to type login name. Check if some data about login in localStorage then paste it as login and focus on password input, if there is none, then focus on login input.
loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});

// On click on submit button checks if login and password inputs has values. If it has none - turns shake animation on popup window, doesn't send anything to server. If they both have then sends data to server and saves login to localStorage.
loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    // loginPopup.classList.remove("modal-error");
    // loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

// Closes login pop-up window by click on Login-button in header-navigation menu. Also removes shaking animation class from it, those eventually been added due wrong inputs.
loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

// Closes login pop-up window by click on Login-button in header-navigation menu.
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});