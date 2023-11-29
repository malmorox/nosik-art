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
    },
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
    paintingInfoContainer.appendChild(artName);

    let artYear = document.createElement("div");
    artYear.className = "art-year";
    artYear.innerHTML = "<span>" + artWork.year + "</span>";
    paintingInfoContainer.appendChild(artYear);

    let artDescription = document.createElement("div");
    artDescription.className = "art-description";
    artDescription.innerHTML = "<span>" + artWork.description + "</span>";
    paintingInfoContainer.appendChild(artDescription);

    let artPrice = document.createElement("div");
    artPrice.className = "art-price";
    artPrice.innerHTML = "<span>" + artWork.price + "</span>";
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
        redirectToArtPieceDetails(name, year, description, price, image);
    }
});

function redirectToArtPieceDetails(name, year, description, price, image) {
    let url = `art-piece.html?name=${name}&year=${year}&description=${description}&price=${price}&image=${image}`;
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function () {
    fillInfoInToDetails();
});

const ART_PIECE_DETAILS = document.querySelector('.nosik-art-piece');

/* DETALLE DE OBRA - RELLENAR CAMPOS */

//función para rellenar en la página de detalles de la obra
function fillInfoInToDetails() {
    const artPieceName = document.querySelector('.art-piece-info #name');
    const artPieceYear = ART_PIECE_DETAILS.querySelector('.art-piece-info #year');
    const artPieceDescription = ART_PIECE_DETAILS.querySelector('.art-piece-info #description');
    const artPiecePrice = ART_PIECE_DETAILS.querySelector('.art-piece-info #price');
    const artPieceImage = ART_PIECE_DETAILS.querySelector('.art-piece-info #image');
    //asigna los valores del cuadro de la pagina 'Galería' en la página de detalles de la obra
    console.log('fillInfoInToDetails is running');
    let params = new URLSearchParams(window.location.search);
    artPieceName.textContent = decodeURIComponent(params.get('name'));
    artPieceYear.textContent = decodeURIComponent(params.get('year'));
    artPieceDescription.textContent = decodeURIComponent(params.get('description'));
    artPiecePrice.textContent = decodeURIComponent(params.get('price'));
    artPieceImage.src = decodeURIComponent(params.get('image'));
}