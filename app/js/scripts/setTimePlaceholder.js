const date = new Date();
let hours = date.getHours().toString().padStart(2, "0");
// let hours = ("0" + hours).slice(-2);
let minutes = date.getMinutes();
let currentTime = hours + ":" + minutes;

export function setTimePlaceholder() {
  document
    .getElementById("appointment-time")
    .setAttribute("placeholder", currentTime);
}
