export function renderProducts (products){
    let html = ``
    products.forEach((product)=>{

        html += `   
        <div class="product-col bd-bt animate__animated animate__bounceInUp">
        <img class="product-img "src="${product.img}" alt="">
        <div class="product-details">
            <p class="text-bold text-md">${product.name}</p>
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