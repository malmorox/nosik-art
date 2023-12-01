/* GALERÍA - OBRAS  */

const ARTWORKS = [
    {
        image: "/img/art/cuadro1.jpg", name: "Universitaria", description: "Tinta sobre cartulina",
        dimensions: "21 x 29.7 cm", price: "$480", year: "2023"
    },
    {
        image: "/img/art/cuadro2.jpg", name: "La mujer de azul", description: "Acrílico sobre lienzo",
        dimensions: "29,7 x 42 cm", price: "$350", year: "2019"
    },
    {
        image: "/img/art/cuadro3.jpg", name: "Guardaba el cajón", description: "Tinta acrílica sobre cartulina",
        dimensions: "21 x 29.7 cm", price: "$400", year: "2022"
    },
    {
        image: "/img/art/cuadro4.jpg", name: "Atónito", description: "Spray sobre madera",
        dimensions: "50 x 80 cm", price: "$523", year: "2021"
    },
    {
        image: "/img/art/cuadro5.jpg", name: "Yendo a la guerra", description: "Lápices/Acuarelas sobre cartulina",
        dimensions: "29.7 x 42 cm", price: "$210", year: "2023"
    },
    {
        image: "/img/art/cuadro6.jpg", name: "Primavera e Indio", description: "Acrílico sobre madera blanca",
        dimensions: "60 x 60 cm", price: "$400", year: "2022"
    },
    {
        image: "/img/art/cuadro7.jpg", name: "Divorcio en el techo", description: "Tinta acrílica sobre cartulina",
        dimensions: "35 x 50 cm", price: "$400", year: "2022"
    },
];

console.log(ARTWORKS[0]['image'])

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

    let artDimensions = document.createElement("div");
    artDimensions.className = "art-dimensions";
    artDimensions.innerHTML = "<span>" + artWork.dimensions + "</span>";
    paintingInfoContainer.appendChild(artDimensions);

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
        let dimensions = encodeURIComponent(clickedArtwork.querySelector('.art-dimensions span').textContent.trim());
        let price = encodeURIComponent(clickedArtwork.querySelector('.art-price span').textContent.trim());
        let image = encodeURIComponent(clickedArtwork.querySelector('.art-image img').src);
        console.log(name, year, description, dimensions, price, image);
        redirectToArtPieceDetails(name, year, description, dimensions, price, image);
    }
});

function redirectToArtPieceDetails(name, year, description, dimensions, price, image) {
    let url = `art-piece.html?name=${name}&year=${year}&description=${description}&dimensions=${dimensions}&price=${price}&image=${image}`;
    window.location.href = url;
}