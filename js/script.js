/* GALERÍA - OBRAS  */

const ARTWORKS = [
    {
        image: "../img/art/cuadro1.jpg", name: "Universitaria", description: "21x29.7cm\n" +
            "Tinta sobre cartulina", price: "$480", year: "2023"
    },
    {
        image: "../img/art/cuadro2.jpg", name: "La mujer de azul", description: "Acrílico sobre lienzo\n" +
            "29,7 x 42 cm", price: "$350", year: "2019"
    },
    {
        image: "../img/art/cuadro3.jpg", name: "Guardaba el cajón", description: "Tinta acrílica sobre cartulina\n" +
            "21x29.7cm", price: "$400", year: "2022"
    },
    {
        image: "../img/art/cuadro4.jpg", name: "Atónito", description: "Spray sobre madera\n" +
            "50 x 80 cm", price: "$523", year: "2021"
    },
    {
        image: "../img/art/cuadro5.jpg", name: "Yendo a la guerra", description: "29.7x42cm\n" +
            "Lápices/Acuarelas sobre cartulina", price: "$210", year: "2023"
    },
    {
        image: "../img/art/cuadro6.jpg", name: "Primavera e Indio", description: "Acrílico sobre madera blanca\n" +
            "60 x 60cm", price: "$400", year: "2022"
    },
    {
        image: "../img/art/cuadro7.jpg", name: "Divorcio en el techo", description: "Tinta acrílica sobre cartulina\n" +
            "35x50cm", price: "$400", year: "2022"
    }
];

const GALLERY_CONTAINER = document.querySelector('.nosik-gallery-container');

function showArtWorks() {
    ARTWORKS.forEach((artWork) => {
        let artPiece = createArtWork(artWork);
        GALLERY_CONTAINER.appendChild(artPiece);
    });
}

function createArtWork(artWork) {
    let artworkContainer = document.createElement("div");
    artworkContainer.className = "nosik-gallery-artwork";

    let paintingContainer = document.createElement("div");
    paintingContainer.className = "art-image";

    let artImage = document.createElement("img");
    artImage.src = artWork.image;
    artImage.alt = "";
    artImage.className = "painting";

    paintingContainer.appendChild(artImage);

    let paintingInfoContainer = document.createElement("div");
    paintingInfoContainer.className = "paiting-info";

    let artName = document.createElement("div");
    artName.className = "art-name";
    artName.innerHTML = "<h2>" + artWork.name + "</h2>";

    let artYear = document.createElement("div");
    artYear.className = "art-year";
    artYear.innerHTML = "<span>" + artWork.year + "</span>";

    let artDescription = document.createElement("div");
    artDescription.className = "art-description";
    artDescription.innerHTML = "<span>" + artWork.description + "</span>";

    let artPrice = document.createElement("div");
    artPrice.className = "art-price";
    artPrice.innerHTML = "<span>" + artWork.price + "</span>";

    paintingInfoContainer.appendChild(artName);
    paintingInfoContainer.appendChild(artYear);
    paintingInfoContainer.appendChild(artDescription);
    paintingInfoContainer.appendChild(artPrice);

    artworkContainer.appendChild(paintingContainer);
    artworkContainer.appendChild(paintingInfoContainer);

    return artworkContainer;
}

showArtWorks();

/* GALERÍA - REDIRECCIÓN AL DETALLE DE LA OBRA  */

GALLERY_CONTAINER.addEventListener('click', function (e) {
    let clickedArtwork = e.target.closest('.nosik-gallery-artwork');
    if (clickedArtwork) {
        let name = encodeURIComponent(clickedArtwork.querySelector('.art-name h2').textContent.trim());
        let year = encodeURIComponent(clickedArtwork.querySelector('.art-year span').textContent.trim());
        let description = encodeURIComponent(clickedArtwork.querySelector('.art-description span').textContent.trim());
        let price = encodeURIComponent(clickedArtwork.querySelector('.art-price span').textContent.trim());
        let image = encodeURIComponent(clickedArtwork.querySelector('.art-image img').src);
        console.log(name, year, description, price, image);
        fillInfoInToDetails(name, year, description, price, image);
        redirectToArtPieceDetails(name, year, description, price, image);
    }
});

function redirectToArtPieceDetails(name, year, description, price, image) {
    setTimeout(function () {
        let url = `art-piece.html?name=${name}&year=${year}&description=${description}&price=${price}&image=${image}`;
        window.location.href = url;
    }, 100);
}

const ART_PIECE_DETAILS = document.querySelector('.nosik-art-piece');
function fillInfoInToDetails(name, year, description, price, image) {
    const artPieceName = ART_PIECE_DETAILS.getElementById('name');
    const artPieceYear = ART_PIECE_DETAILS.getElementById('year');
    const artPieceDescription = ART_PIECE_DETAILS.getElementById('description');
    const artPiecePrice = ART_PIECE_DETAILS.getElementById('price');
    const artPieceImage = ART_PIECE_DETAILS.getElementById('image');
    //asigna los valores del cuadro de la pagina 'Galería' en la página de detalles de la obra
    console.log('fillInfoInToDetails is running');
    artPieceName.textContent = decodeURIComponent(name);
    artPieceYear.textContent = decodeURIComponent(year);
    artPieceDescription.textContent = decodeURIComponent(description);
    artPiecePrice.textContent = decodeURIComponent(price);
    artPieceImage.src = decodeURIComponent(image);
}


/* CARRITO DE COMPRA */

const cartButton = document.querySelector('.cart-icon');
const cartProductsHidden = document.querySelector('.nosik-cart-products');

/*cartButton.addEventListener('click', () => {
    cartProductsHidden.classList.toggle('hidden-cart');
});*/

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

//Método dinámico para generar el contenido del header
function fillHeader() {

}