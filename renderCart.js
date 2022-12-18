// import { productArray } from "./data"
const cart =[]
let totalPrice =0

export function addToCart (productId,products){
    if (cart.length <3){
    const orderSection = document.getElementById('orderSection')

    // get product with this product id called when clicked on product
    const cartItem = products.filter((product)=>{
        return product.id === productId
     })[0]
 
     cart.push(cartItem);
     console.log(cart);
     totalPrice = cart.reduce((acc,cur)=>acc + cur.price,0)

     renderCart ()

     let order = document.createElement ('div')

    cart.forEach ((item)=>{
        order.innerHTML += `
        <div class="cart-item">
        <p class="d-inline-block">${item.name} <span class="text-sm mx-2"> remove</span></p>
            <p class="text-md d-inline-block">$${item.price}</p>
            </div>         
            `
    })
    order.classList.add('order-bg')
    orderSection.insertBefore(order, orderSection.children[1])
    console.log(order.innerHTML);
    }
}

export function renderCart(){
    let cartHtml =``
    cartHtml = `
    <div class="col-6 bd-bt">
    <h2 class="text-center container">Your Order</h2>
    </div>
    <div class="order-bg">
        <h4 class="total">Total Price: <span class="text-right">$${totalPrice}</span></h4>
        <button class="order text-bold" id="orderBtn">Complete Order</button>
        </div>
        `
    document.getElementById('orderSection').innerHTML = cartHtml
}