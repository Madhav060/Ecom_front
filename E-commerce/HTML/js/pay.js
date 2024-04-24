function addCart() {
    // Get product information from the product item in veg.html
    let productName = document.querySelector('.product-info span').innerText;
    let productPrice = document.querySelector('.product-info h4').innerText;

    // Create a new row for the cart table
    let newRow = document.createElement('tr');

    // Populate the new row with data
    newRow.innerHTML = `
        <td>
            <div class="cart-info">
                <img src="./images_1/tomato.jpg" alt="" /> <!-- Update image source -->
                <div>
                    <p>${productName}</p>
                    <span>Price: ${productPrice}</span> <br />
                    <a href="#">remove</a>
                </div>
            </div>
        </td>
        <td><input type="number" value="1" min="1" /></td>
        <td>${productPrice}</td>
    `;

    // Append the new row to the cart table in cart.html
    let cartTable = document.querySelector('.container.cart table');
    if (cartTable) {
        cartTable.appendChild(newRow);
    } else {
        console.error("Cart table not found!");
    }
}
