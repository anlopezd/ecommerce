import countdown from "./time.js";

const example = document.getElementById("shopping-cart")
const container = document.querySelector(".items-container")
const close = document.getElementById("cerrar")

example.addEventListener("click", () => {
    container.classList.toggle("mostrarc")
})

close.addEventListener("click", () => {
    container.classList.remove("mostrarc")
})