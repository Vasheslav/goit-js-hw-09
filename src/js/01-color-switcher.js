const ref = {
  startEl: document.querySelector('button[data-start]'),
  stopEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let timerId = null;

ref.startEl.addEventListener('click', onClicStart);
ref.stopEl.addEventListener('click', onClickStop);

ref.stopEl.disabled = true;

function onClicStart() {
  console.log();
  changeBodyColor();
  timerId = setInterval(() => changeBodyColor(), 1000);
  ref.startEl.disabled = true;
  ref.stopEl.disabled = false;
}

function onClickStop() {
  clearInterval(timerId);
  ref.startEl.disabled = false;
  ref.stopEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  const rundomColor = getRandomHexColor();
  ref.bodyEl.style.backgroundColor = rundomColor;
}
