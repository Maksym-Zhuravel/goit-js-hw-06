const validationForm = document.getElementById("validation-input")

validationForm.addEventListener('blur', blurOnInput)

function blurOnInput() {
    if (validationForm.value.length < validationForm.getAttribute("data-length") || validationForm.value.length > validationForm.getAttribute("data-length")) {
        validationForm.classList.add("invalid")
    } else {
        validationForm.classList.remove("invalid")
        validationForm.classList.add("valid")
    }
}

