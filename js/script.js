/* GALERÍA - REDIRECCIÓN A EL DETALLE DE LA OBRA  */

const GALLERY_CONTAINER = document.querySelector('.nosik-gallery-container');
GALLERY_CONTAINER.addEventListener('click', function (event) {
    if (event.target.classList.contains('nosik-galery-artwork')) {
        const name = event.target.getAttribute('data-name');
        const description = event.target.getAttribute('data-author');
        const price = event.target.getAttribute('data-price');
        const image = event.target.getAttribute('data-image');
        fillInfoInToDetails(name, description, price, image);
        redirectToArtDetails();
    }
});

function redirectToArtDetails() {
    window.location.href = 'art-piece.html';
}

const ART_PIECE_DETAILS = document.querySelector('.nosik-art-piece');
function fillInfoInToDetails(name, description, price, image) {
    const artPieceName = ART_PIECE_DETAILS.getElementById('name');
    const artPieceDescription = ART_PIECE_DETAILS.getElementById('description');
    const artPiecePrice = ART_PIECE_DETAILS.getElementById('price');
    const artPieceImage = ART_PIECE_DETAILS.getElementById('image');
    //asigna los valores del cuadro de la pagina 'Galería' en la página de detalles de la obra
    artPieceName.textContent = name;
    artPieceDescription.textContent = description;
    artPiecePrice.textContent = price;
    artPieceImage.src = image;
}


/* CARRITO DE COMPRA */

const cartButton = document.querySelector('.cart-icon');
const cartProductsHidden = document.querySelector('.nosik-cart-products');

cartButton.addEventListener('click', () => {
    cartProductsHidden.classList.toggle('hidden-cart');
});

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// lista de todos los las obras de la galeria
const productsList = document.querySelector('.nosik-main-container');

// array con todos los productos del carrito
let allProducts = [];

const toPayTotal = document.querySelector('.cart-total-topay');

const cartCount = document.querySelector('#cart-count');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('add-to-cart')) {
        const product = e.target.closest('.nosik-art-piece');

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('#name').textContent,
            price: product.querySelector('#price').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }
        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('delete-icon')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});

// funcion para mostrar  HTML
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    // Limpiar HTML
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

        rowProduct.append(containerProduct);

        total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    toPayTotal.innerText = `$${total}`;
    cartCount.innerText = totalOfProducts;
};

/*
function findWinner() {
    if(playerCount % 2 === 0) {
        color = "red";
        jugador = '1';
    } else {
        color = "yellow";
        jugador = '2';
    }

    if(findRows(color) || findColumns(color)) {
            textContainer.innerHTML = "<h1>El jugador " +jugador+ " ha ganado</h1>";
            return true;
        }
    } else {
        textContainer.innerHTML = "<h1>Empate</h1>";
        return false;
    }
}*/