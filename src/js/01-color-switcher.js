const ref = {
  startEl: document.querySelector('button[data-start]'),
  stopEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let timerId = null;
let startBtnOn = false;

ref.startEl.addEventListener('click', onClicStart);
ref.stopEl.addEventListener('click', onClickStop);

function onClicStart() {
  if (startBtnOn) {
    return;
  }

  changeBodyColor();
  timerId = setInterval(() => changeBodyColor(), 1000);
  startBtnOn = true;
}

function onClickStop() {
  clearInterval(timerId);
  startBtnOn = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  const rundomColor = getRandomHexColor();
  ref.bodyEl.style.backgroundColor = rundomColor;
}
