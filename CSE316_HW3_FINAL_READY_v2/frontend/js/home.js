var products = [
    { name: "Red Shirt", category: "Clothing", price: 20.00, image: "productImages/product1.JPEG" },
    { name: "Porsche", category: "Cars", price: 50000.00, image: "productImages/product2.JPEG" },
    { name: "Ferrari", category: "Cars", price: 80000.00, image: "productImages/product3.JPEG" },
    { name: "Chair", category: "Furniture", price: 150.00, image: "productImages/product4.JPEG" },
    { name: "Cap", category: "Clothing", price: 10.00, image: "productImages/product5.JPEG" },
    { name: "Headphones", category: "Electronics", price: 25.00, image: "productImages/product6.JPEG" },
    { name: "Jacket", category: "Sportswear", price: 45.00, image: "productImages/product7.JPEG" },
    { name: "Nintendo Switch", category: "Electronics", price: 210.00, image: "productImages/product8.JPEG" },
    { name: "Smartphone", category: "Electronics", price: 220.00, image: "productImages/product9.JPEG" },
    { name: "Converse", category: "Clothing", price: 55.00, image: "productImages/product10.JPEG" }
];

var productList = document.getElementById("productList");
var cart = JSON.parse(localStorage.getItem("cart") || "[]");
var wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

for (var i = 0; i < products.length; i++) {
    var p = products[i];
    productList.innerHTML += `
    <div class="col-md-4">
      <div class="card mb-4 h-100 product-card d-flex flex-column">
        <div class="card-img-container">
            <img src="${p.image}" class="card-img-top-custom" alt="${p.name}">
        </div>
        
        <div class="card-body text-center flex-grow-1">
          <h5 class="card-title">${p.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${p.category}</h6>
          <p class="card-text"><strong>$${p.price.toFixed(2)}</strong></p>
        </div>
        
        <div class="card-footer product-buttons text-center">
            <button class="btn btn-sm btn-success w-100 mb-2" onclick="addCart(${i})">Add to Cart</button>
            <button class="btn btn-sm btn-success w-100 mb-2" onclick="addWishlist(${i})">Add to Wishlist</button>
        </div>
      </div>
    </div>`;
}

function addCart(i) {
    cart.push(products[i]);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(products[i].name + " added to cart");
}

function addWishlist(i) {
    wishlist.push(products[i]);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(products[i].name + " added to wishlist");
}