//MARIEM MAAMAR ID:116028086
var cart = JSON.parse(localStorage.getItem("cart") || "[]");
var cartList = document.getElementById("cartList");
var total = 0;

if (cart.length === 0) {
    cartList.innerHTML = "<div class='col-12'><div class='alert alert-info text-center'>Cart is empty</div></div>";
} else {
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        total += item.price;

        cartList.innerHTML += `
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
              <button class="btn btn-sm btn-danger w-100" onclick="removeItem(${i})">Remove</button>
          </div>
        </div>
      </div>`;
    }
}

document.getElementById("cartTotal").innerText = total.toFixed(2);

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}