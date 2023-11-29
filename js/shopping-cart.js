/* CARRITO DE COMPRA */

const cartButton = document.querySelector('.cart-icon');
const cartCounter = document.querySelector('.nosik-cart-counter');
const cartCount = document.querySelector('.nosik-cart-counter #cart-count');
const cartProductsHidden = document.querySelector('.nosik-cart-products');

cartButton.addEventListener('click', () => {
    cartProductsHidden.classList.toggle('hidden-cart');
})

const rowProduct = document.querySelector('.row-product');
const cartInfo = document.querySelector('.cart-product');

//contenedor que contiene la informacion de los detalles de la obra
const productsDetails = document.querySelector('.nosik-main-container');

//array con todos los productos del carrito
let allProducts = [];

const totalToPay = document.querySelector('.cart-total-topay');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.nosik-cart-total');

productsDetails.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
        const PRODUCT = e.target.closest('.nosik-art-piece');

        const PRODUCT_INFO = {
            quantity: 1,
            name: PRODUCT.querySelector('#name').textContent,
            price: PRODUCT.querySelector('#price').textContent,
        };

        const exits = allProducts.some(
            product => product.name === PRODUCT_INFO.name
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.name === PRODUCT_INFO.name) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, PRODUCT_INFO];
        }
        showCart();
    }
});

// funcion para mostrar  HTML
const showCart = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
        cartCounter.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
        cartCounter.classList.remove('hidden');
    }

    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="product-info">
                <span class="cart-product-amount">${product.quantity}</span>
                <p class="cart-product-name">${product.title}</p>
                <span class="cart-product-price">${product.price}</span>
            </div>
            <a href="#" class="delete-icon"><i class="fas fa-times"></i></a>
        `;

        rowProduct.appendChild(containerProduct);

        total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    totalToPay.innerText = `$${total}`;
    cartCount.innerText = totalOfProducts;
};