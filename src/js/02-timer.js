import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const timerEl = document.querySelector('.timer');
const fieldEl = document.querySelectorAll('.field');
const valueEl = document.querySelectorAll('.value');
const inputDateTime = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

buttonEl.disabled = true;
let timerId = null;

function changeCssStyle() {
  timerEl.style.cssText = 'display: flex; gap: 25px';
  fieldEl.forEach(el => {
    el.style.cssText =
      'display: flex; flex-direction: column; align-items: center';
  });
  valueEl.forEach(el => {
    el.style.cssText = 'font-size: 50px';
  });
}

changeCssStyle();

let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  clickOpens: true,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0].getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      buttonEl.disabled = false;
    }
  },
};

const dataPicer = flatpickr(inputDateTime, options);

buttonEl.addEventListener('click', startDateTimer);

function startDateTimer() {
  clearInterval(timerId);
  buttonEl.disabled = true;

  timerId = setInterval(() => {
    let differenceTime = dataPicer.selectedDates[0].getTime() - Date.now();

    dataDays.textContent = convertMs(differenceTime).days;
    dataHours.textContent = convertMs(differenceTime).hours;
    dataMinutes.textContent = convertMs(differenceTime).minutes;
    dataSeconds.textContent = convertMs(differenceTime).seconds;

    if (differenceTime < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
