import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  daysValue.textContent = days;
  hoursValue.textContent = hours;
  minutesValue.textContent = minutes;
  secondsValue.textContent = seconds;

  return { days, hours, minutes, seconds };
}

// function addLeadingZero(days) {
//   if (days < 10) {
//     daysValue.textContent = days.toString().padStart(2, '0');
//   } else {
//     daysValue.textContent = days;
//   }
// }

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
startButton.setAttribute('disabled', 'disabled');
let userTime;
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate >= selectedDates[0]) {
      window.alert('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled');
    }
    userTime = Date.parse(selectedDates[0]);
  },
};

flatpickr(input, options);

startButton.addEventListener('click', () => {
  setInterval(() => {
    options.defaultDate = new Date();
    convertMs(userTime - Date.parse(options.defaultDate));
  }, 1000);
});
