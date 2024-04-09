document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');

    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');

    // Add click event listener to each product card
    productCards.forEach(function(card) {
        const addToCartBtn = card.querySelector('.btn-add-to-cart');
        const quantityInput = card.querySelector('.quantity');

        addToCartBtn.addEventListener('click', function() {
            // Get the price of the product
            const price = parseFloat(card.getAttribute('data-price'));
            // Get the quantity of the product
            const quantity = parseInt(quantityInput.value);
            // Calculate the total price
            const totalPrice = price * quantity;
            // Display a message with the total amount
            alert('Added to cart. Total: $' + totalPrice.toFixed(2));
        });
    });
});
// Function to create global header
function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="container">
            <h1>Retro Products</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="product.html">Product</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="about.html">About Us</a></li>
                </ul>
            </nav>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
}

// Function to create global footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <p>&copy; 2024 Retro Products. All rights reserved.</p>
        </div>
    `;
    document.body.appendChild(footer);
}

// Call functions to create header and footer when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    createHeader();
    createFooter();
});
