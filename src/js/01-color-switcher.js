function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let randomColor;
let colorChange;

startButton.addEventListener('click', () => {
  colorChange = setInterval(() => {
    randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    startButton.setAttribute('disabled', 'disabled');
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(colorChange);
  startButton.removeAttribute('disabled', 'disabled');
});
