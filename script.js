let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = parseFloat(localStorage.getItem('total')) || 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    saveCart();
    alert(name + " ajouté au panier !");
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} D`;
            cartItems.appendChild(li);
        });

        const tva = total * 0.19;
        document.getElementById('total').textContent = total.toFixed(2);
        document.getElementById('tva').textContent = tva.toFixed(2);
        document.getElementById('grand-total').textContent = (total + tva).toFixed(2);
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);
}

const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        total = 0;
        saveCart();
        updateCart();
    });
}

window.onload = updateCart;
