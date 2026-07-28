const cart = [];
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const clearCart = document.getElementById("clearCart");
const buyNow = document.getElementById("buyNow");
const orderMessage = document.getElementById("orderMessage");
const addButtons = document.querySelectorAll(".cart-button");

function updateCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>No items added.</p>";
    cartTotal.textContent = "Rs. 0";
    return;
  }

  let total = 0;

  cartItems.innerHTML = cart.map((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    return `
      <div class="cart-item">
        <span>${item.name} x ${item.quantity}</span>
        <strong>Rs. ${itemTotal}</strong>
      </div>
    `;
  }).join("");

  cartTotal.textContent = `Rs. ${total}`;
}

function clearOrderMessage() {
  orderMessage.textContent = "";
}

function removeFromCart(name) {
  const existingItem = cart.find((item) => item.name === name);

  if (!existingItem) {
    orderMessage.textContent = "This item is not in the cart.";
    return;
  }

  existingItem.quantity -= 1;

  if (existingItem.quantity === 0) {
    const itemIndex = cart.indexOf(existingItem);
    cart.splice(itemIndex, 1);
  }

  clearOrderMessage();
  updateCart();
}

addButtons.forEach((button) => {
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.type = "button";
  removeButton.textContent = "Remove from Cart";
  button.insertAdjacentElement("afterend", removeButton);

  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    clearOrderMessage();
    updateCart();
  });

  removeButton.addEventListener("click", () => {
    removeFromCart(button.dataset.name);
  });
});

clearCart.addEventListener("click", () => {
  cart.length = 0;
  clearOrderMessage();
  updateCart();
});

buyNow.addEventListener("click", () => {
  if (cart.length === 0) {
    orderMessage.textContent = "Please add items to the cart first.";
    return;
  }

  cart.length = 0;
  updateCart();
  orderMessage.textContent = "Order successful.";
});
