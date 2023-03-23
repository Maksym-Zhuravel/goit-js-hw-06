const inputEl = document.querySelector('#controls input')
const boxDiv = document.getElementById('boxes')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')

createBtn.addEventListener('click', onAmountValue)

function onAmountValue() {
  const amount = inputEl.value
  console.log(amount)
}

function onCreateDiv(amount) {
  const newDiv = document.createElement('div')
  console.log(newDiv)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
