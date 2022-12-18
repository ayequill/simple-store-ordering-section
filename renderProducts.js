export function renderProducts (products){
    let html = ``
    products.forEach((product)=>{

        html += `   
        <div class="product-col bd-bt">
        <img class="product-img"src="${product.img}" alt="">
        <div class="product-details">
            <h3>${product.name}</h3>
            <p class="text-sm">${product.details}</p>
            <p class="text-md">$${product.price}</p>
        </div>
        <button type="button" id="add-btn" data-add-to-cart="${product.id}">
        +
        </button>
        </div>
     `
    })
    document.getElementById('productSection').innerHTML += html
}