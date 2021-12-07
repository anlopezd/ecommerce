const lessBtn = document.querySelector(".less")
const plusBtn = document.querySelector(".plus")
const number = document.querySelector(".number")
const price = document.querySelector(".price")
let value = 1;

lessBtn.addEventListener("click", () => {
    value--;
    number.innerHTML = value;
    price.innerHTML = `$${20 * value}`
})


plusBtn.addEventListener("click", () => {
value++
    number.innerHTML = value;
    price.innerHTML = `$${20*value}`

})

export * as pricing;
