/* CARRITO DE COMPRA */

const cartButton = document.querySelector('.cart-icon');
const cartCounter = document.querySelector('.nosik-cart-counter');
const cartCount = document.querySelector('.nosik-cart-counter #cart-count');
const cartProductsHidden = document.querySelector('.nosik-cart-products');

const totalToPay = document.querySelector('.cart-total-topay');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.nosik-cart-total');


function toggleCartVisibility() {
    cartProductsHidden.classList.toggle('hidden-cart');
}

//evento para abrir y cerrar el carrito pulsando el boton

cartButton.addEventListener('click', () => {
    console.log("Clic en botón");
    toggleCartVisibility();
});


//evento para cerrar el carrito pulsando en cualquier sitio de la pantalla
/*document.addEventListener('click', function (e) {
    if (!cartProductsHidden.contains(e.target) && !cartProductsHidden.classList.contains('hidden-cart')) {
        cartProductsHidden.classList.add('hidden-cart');
    }
});*/


const rowProduct = document.querySelector('.row-product');
const cartInfo = document.querySelector('.cart-product');

//contenedor que contiene la informacion de los detalles de la obra
const productsDetails = document.querySelector('.nosik-main-container');

//array con todos los productos del carrito
let allProducts = [];

//evento para añadir producto al carrito
productsDetails.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
        const PRODUCT = e.target.closest('.nosik-art-piece');

        const PRODUCT_INFO = {
            quantity: 1,
            name: PRODUCT.querySelector('#name').textContent,
            price: PRODUCT.querySelector('#price').textContent
        };

        const PRODUCT_EXIST = allProducts.findIndex(
            product => product.name === PRODUCT_INFO.name
        );
        console.log(allProducts);
        if (PRODUCT_EXIST === -1) {
            //el producto no esta en el carrito por lo que lo añadimos o ya está metido ese producto
            allProducts.push(PRODUCT_INFO);

            //!allProducts.contains(PRODUCT_INFO.name)
        } else {

            console.log('hola');
        }
        showCart();
    }
});

//evento para eliminar producto del carrito
rowProduct.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-icon')) {
        const containerProduct = e.target.closest('.cart-product');

        // Encuentra el índice del producto en el array allProducts
        const index = Array.from(containerProduct.parentNode.children).indexOf(containerProduct);
        //eliminamos el producto del array
        allProducts.splice(index, 1);
        showCart();
    }
});

//funcion para mostrar el carrito
function showCart() {
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
                <p class="cart-product-name">${product.name}</p>
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
}