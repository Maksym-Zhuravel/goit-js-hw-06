const inputText = document.getElementById('name-input')
const outputText = document.getElementById('name-output')

inputText.addEventListener('input', changeOutput) 


function changeOutput() {
    if (event.currentTarget.value === "") {
        outputText.textContent = "Anonymous"
    }else {outputText.textContent = event.currentTarget.value}
}

