const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

let sec_value = 10,
  min_value = 9,
  hour_value = 8,
  day_value = 9;

const time_function = setInterval(() => {
  --sec_value;

  if (sec_value === 0) {
    min_value--;
    sec_value = 60;
  }
  if (min_value === 0) {
    hour_value--;
    min_value = 60;
  }
  if (hour_value === 0) {
    day_value--;
    hour_value = 24;
  }
  if (day_value === 0) {
    clearInterval(time_function);
  }

  seconds.textContent = sec_value < 10 ? `0${sec_value}` : sec_value;
  minutes.textContent = min_value < 10 ? `0${min_value}` : min_value;
  hours.textContent = hour_value < 10 ? `0${hour_value}` : hour_value;
  days.textContent = day_value < 10 ? `0${day_value}` : day_value;
}, 1000);
