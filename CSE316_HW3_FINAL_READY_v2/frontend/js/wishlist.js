var wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
var list = document.getElementById("wishlistList");

if (wishlist.length === 0) {
    list.innerHTML = "<div class='col-12'><div class='alert alert-info text-center'>Wishlist is empty</div></div>";
} else {
    for (var i = 0; i < wishlist.length; i++) {
        var item = wishlist[i];

        list.innerHTML += `
      <div class="col-md-4">
        <div class="card mb-4 h-100 product-card d-flex flex-column">
          
          <div class="card-img-container">
              <img src="${item.image || 'placeholder.jpg'}" class="card-img-top-custom" alt="${item.name}">
          </div>
          
          <div class="card-body text-center flex-grow-1">
            <h5 class="card-title">${item.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${item.category || 'Category'}</h6>
            <p class="card-text"><strong>$${item.price.toFixed(2)}</strong></p>
          </div>
          
          <div class="card-footer product-buttons text-center">
              <button class="btn btn-sm btn-primary w-100 mb-2" onclick="moveToCart(${i})">Move to Cart</button>
              <button class="btn btn-sm btn-danger w-100" onclick="removeItem(${i})">Remove</button>
          </div>
        </div>
      </div>`;
    }
}

function removeItem(i) {
    wishlist.splice(i, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    location.reload();
}

function moveToCart(i) {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(wishlist[i]);
    localStorage.setItem("cart", JSON.stringify(cart));
    wishlist.splice(i, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    location.reload();
}