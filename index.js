import { productArray, modal } from "/data.js"
import { renderProducts } from './renderProducts.js';
import { addToCart, renderCart } from './renderCart.js';

renderProducts(productArray)
document.addEventListener('click',(e)=>{
    if (e.target.dataset.addToCart){
        addToCart(e.target.dataset.addToCart,productArray)
}
if (e.target.id === 'orderBtn'){
    modal.style.display = 'flex'
}
if (e.target.id === 'declineBtn'){
    modal.style.display = 'none'
}


})











