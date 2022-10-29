// Variáveis - variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value

    const result = IMC(weight, height)
    console.log(result)
}

function IMC(weight, height) {
    return (weight / ((height / 100) **2)).toFixed(2)
}   

document.querySelector(".calcIMC")
















// 3 maneiras de criar e atriburir função a um evento
/*form.onsubmit = function() {}

form.onsubmit = () => {}

form.onsubmit = handleSubmit

function handleSubmit() {}*/