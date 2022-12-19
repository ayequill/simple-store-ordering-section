export function renderProducts (products){
    let html = ``
    products.forEach((product)=>{

        html += `   
        <div class="product-col bd-bt animate__animated animate__bounceInUp">
        <div class="product-img mx-1">
        <img src="${product.img}" alt="">
        </div>
        <div class="product-details">
            <p class="text-bold text-md">${product.name}</p>
            <p class="text-sm">${product.details}</p>
            <p class="text-md">$${product.price}</p>
        </div>
        <div class="add-btn">
        <p type="button" id="add-btn" data-add-to-cart="${product.id}">
        Add To Cart
        </p>
        </div>
        </div>
     `
    })
    document.getElementById('productSection').innerHTML += html
}