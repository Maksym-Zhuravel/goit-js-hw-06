const refs = {
valueEl: document.getElementById('value'),
decrementBtn: document.querySelector(`[data-action="decrement"]`),
incrementBtn: document.querySelector(`[data-action="increment"]`),
}

let counter = 0;

refs.decrementBtn.addEventListener('click', decrementCounter)
refs.incrementBtn.addEventListener('click', incrementCounter)

function decrementCounter() {
    counter += 1;
    refs.valueEl.textContent = counter;
}

function incrementCounter() {
    counter -= 1;
    refs.valueEl.textContent = counter;
}

