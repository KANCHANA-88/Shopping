let cartItems = [];

function addToCart(product, price) {
    cartItems.push({product, price});
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");
    let total = 0;

    cartList.innerHTML = "";
    cartItems.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerText = `${item.product} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalElement.innerText = total;
}



function showLogin() {
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('registration-section').classList.add('hidden');
    document.getElementById('main-section').classList.add('hidden');
}

function showRegistration() {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('registration-section').classList.remove('hidden');
    document.getElementById('main-section').classList.add('hidden');
}

function login() {
    // Implement login logic (e.g., check credentials)
    // If successful, show main section and hide login and registration sections
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('registration-section').classList.add('hidden');
    document.getElementById('main-section').classList.remove('hidden');

    return false; // Prevent form submission
}

function register() {
    // Implement registration logic (e.g., save user to a mock database)
    // If successful, show main section and hide login and registration sections
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('registration-section').classList.add('hidden');
    document.getElementById('main-section').classList.remove('hidden');

    return false; // Prevent form submission
}

// Add product and cart logic similar to the previous example

function checkout() {
    alert('Thank you for your purchase!');
}

