// payment.js
document.addEventListener('DOMContentLoaded', () => {
    const cartSummaryElement = document.getElementById('cart-summary');
    const cartData = localStorage.getItem('cart');
    const cart = JSON.parse(cartData);

    let total = 0;
    cart.forEach(item => {
        const summaryItem = document.createElement('p');
        summaryItem.textContent = ${item.productName} - $${item.price};
        cartSummaryElement.appendChild(summaryItem);
        total += item.price;
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = Total: $${total};
    cartSummaryElement.appendChild(totalElement);

    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Payment submitted!');
        localStorage.removeItem('cart');
        window.location.href = 'confirmation.html';
    });
});