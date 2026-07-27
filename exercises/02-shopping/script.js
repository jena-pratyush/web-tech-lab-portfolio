const cart = [];
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const clearCart = document.getElementById("clearCart");
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

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    updateCart();
  });
});

clearCart.addEventListener("click", () => {
  cart.length = 0;
  updateCart();
});
