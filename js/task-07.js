const controller = document.getElementById("font-size-control")
const textSize = document.getElementById("text")

controller.addEventListener("input", textSizeHandler)
textSize.addEventListener("change", textSizeHandler)


function textSizeHandler() {
    textSize.style.fontSize = controller.value + "px"  
}