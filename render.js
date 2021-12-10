const products = [{
    id: 0,
    name: "white shirt",
    price: 25,
    imgSrc: "./imagen01.jpeg"
},
    {id: 1,
    name: "Striped shirt",
    price: 29.99,
imgSrc: "./imagen2.jpg"},
    {id: 2,
    name: "Green shirt",
    price: 12.99,
imgSrc:"./imagen11.jpg"},
    {id: 3,
    name : "Red plaid shirt",
    price: 16.99,
imgSrc:"./imagen6.jpg"},
   {id : 4,
    name : "Blue shirt",
    price: 27.99,
imgSrc:"./imagen7.jpg"},
    {id : 5,
    name : "Black shirt",
     price: 33.99,
    imgSrc:"./imagen8.jpg"},
    {id : 6,
    name : "Pink shirt",
    price: 54.99,
imgSrc:"./imagen5.jpg"},
    {id : 7,
    name : "Dark blue shirt",
    price: 19.99,
imgSrc:"./imagen9.jpg"},
]

const mostrarProductos = document.getElementById("clothes")
const cartItems = document.querySelector(".cart-items")
function renderProducts() {
    products.forEach( (product) => {
        
  mostrarProductos.innerHTML += `
    <div class="clothes-container">
        <img src=${product.imgSrc} loading="lazy" alt="${product.name}">
            <div class="clothes-down">
             <div class="clothes-text">
             <h4>${product.name}</h4>
                <span class="price">$${product.price}</span>
                </div> 
                   
                <div class="comprar">
                    <button class="less" onclick="changeUnits('minus', ${product.id})">-</button>
                    <div class="number">1</div>
                    <button class="plus" onclick="changeUnits('plus', ${product.id})">+</button>
                </div>
            </div>
                <button id="buy" onclick="addToCart(${product.id})">Buy</button>
    </div>
  `
    })
}
renderProducts();



let cart = JSON.parse(localStorage.getItem("CART")) || [];


 // Cart array

function addToCart(id) {

    if (cart.some((item) => item.id === id)) {
        changeUnits("plus", id)
    } else {
        const item = products.find( (product) => product.id === id);
        cart.push({...item, unidad: 1});
    }
   
    updateCart();
}

function updateCart() {
    renderCartItems();
    renderSubtotal();

    localStorage.setItem("CART", JSON.stringify(cart));
}
//calculate subtotal

const subtotal = document.getElementById("subtotal")
function renderSubtotal() {
    let totalPrice = 0, totalItems = 0;

    cart.forEach( (item) => {
        totalPrice += item.price * item.unidad;
        totalItems += item.unidad
        
    })

    subtotal.innerHTML = `
    Total items: ${totalItems}, Total price: $${totalPrice.toFixed(2)}  
    `
    const shopcart = document.getElementById("numbercart")

    if(totalItems > 0) {
       shopcart.style.display = "block"
       shopcart.innerHTML = totalItems
    } else {
        shopcart.style.display = "none"
    }
}

function renderCartItems() {
    cartItems.innerHTML = ""
    cart.forEach( (item) => {
     
        cartItems.innerHTML += `
        <div class="cart-item">
        <div class="item-info" onclick="removeItems(${item.id})">
            <img src=${item.imgSrc} alt=${item.name}>
            <h4>${item.name}</h4>                  
        </div>
        <div class="unit-price">
            <small>$</small>${item.price}
        </div>
        <div class="units">
            <div class="btn minus" onclick="changeUnits('minus', ${item.id})">-</div>
            <div class="number">${item.unidad}</div>
            <div class="btn plus" onclick="changeUnits('plus', ${item.id})">+</div>
            <button class="delete" onclick="removeItems(${item.id})">Delete</button>
        </div>
    </div>
        
        `
    } )
}

function removeItems(id) {
    cart =    cart.filter( (item) => item.id !== id)

    updateCart()
 }

function changeUnits(action, id) {
    cart = cart.map( (item) => {
        let unidad = item.unidad;
        if(item.id === id) {
            if(action === "minus" && item.unidad > 1) {
                unidad--
            } else if (action === "plus") {
                unidad++
            }
        }
        return {
            ...item, unidad
        }
    })
    updateCart()
}

