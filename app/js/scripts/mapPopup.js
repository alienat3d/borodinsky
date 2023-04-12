/* jshint -W097 */
"use strict";

const mapLink = document.querySelectorAll(".contacts-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

// Opens map pop-up window by click on How-to-find-us-button in contacts section [index.html] and in footer.
mapLink.forEach((elm) => {
  elm.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
});

// Closes map pop-up window by click on How-to-find-us-button in contacts section [index.html] and in footer.
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

// Closes map pop-up window by click on How-to-find-us-button in contacts section [index.html] and in footer.
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});