import countdown from "./time.js";

const lessBtn = document.querySelector(".less");
const plusBtn = document.querySelector(".plus");
const number = document.querySelector(".number");
const price = document.querySelector(".price");
let value = 1;

lessBtn.addEventListener("click", () => {
    value--;
    value < 1 ? value = 0 : value;
    number.innerHTML = value;
    price.innerHTML = `$${20 * value}`
})


plusBtn.addEventListener("click", () => {
value++;
    number.innerHTML = value;
    price.innerHTML = `$${20*value}`

})


