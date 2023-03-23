const btnChangeColor = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')
const bodyEl = document.querySelector('body')

btnChangeColor.addEventListener('click', onChangeBackgroundColor)

function onChangeBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor()
  spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


