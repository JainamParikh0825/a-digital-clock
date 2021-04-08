const day = document.getElementById("day-content");
const hours = document.getElementById("hours-content");
const minutes = document.getElementById("minutes-content");
const seconds = document.getElementById("seconds-content");

const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

let currentDay = new Date().getDay();
let currentSecond = new Date().getSeconds();
let currentMinute = new Date().getMinutes();
let currentHour = new Date().getHours();

setInterval(() => {
  currentDay = new Date().getDay();
  currentSecond = new Date().getSeconds();
  currentMinute = new Date().getMinutes();
  currentHour = new Date().getHours();

  if (currentHour < 10) currentHour = "0" + currentHour;
  if (currentMinute < 10) currentMinute = "0" + currentMinute;

  day.textContent = days[currentDay - 1];
  seconds.textContent = currentSecond;
  minutes.textContent = currentMinute;
  hours.textContent = currentHour;
}, 1000);
