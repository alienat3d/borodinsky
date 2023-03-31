const date = new Date();
let hours = date.getHours().toString().padStart(2, "0");
let minutes = date.getMinutes().toString().padStart(2, "0");
let currentTime = hours + ":" + minutes;

export function setTimePlaceholder() {
  document
    .getElementById("appointment-time")
    .setAttribute("placeholder", currentTime);
}
