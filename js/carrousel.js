//Variable que guarda el carrousel del DOM
const CARROUSEL = document.getElementById("nosik-carousel");
//Guardo el elemento de la flecha izquierda en la LEFT_ARROW
const LEFT_ARROW = document.createElement("img");
//Guardo el elemento de la flecha derecha en la RIGHT_ARROW
const RIGHT_ARROW = document.createElement("img");

const ARROW_ARRAY = [LEFT_ARROW, RIGHT_ARROW];
//Inserta la flecha izquierda o derecha en el carrousel en función de la iteración de la i
function insertArrowIntoCarrousel(i) {
    const FIRST_POSITION = 0;
    if(i === FIRST_POSITION) {
        LEFT_ARROW.setAttribute("src", "img/left_arrow.svg");
        LEFT_ARROW.setAttribute("alt", "left-arrow");
        LEFT_ARROW.classList.add("arrow");
        LEFT_ARROW.id = "left";
        CARROUSEL.appendChild(LEFT_ARROW);
    } else {
        RIGHT_ARROW.setAttribute("src", "img/right_arrow.svg");
        RIGHT_ARROW.setAttribute("alt", "right_arrow");
        RIGHT_ARROW.classList.add("arrow");
        RIGHT_ARROW.id = "right";
        CARROUSEL.appendChild(RIGHT_ARROW);
    }
}
//Número de elementos dentro del carrousel
const NUMBER_OF_ELEMENTS = 2;
//Número de imágenes en el carrousel
const NUMBER_OF_IMAGES = 3;
//Constructor del objeto imagen
function Artwork(title, measures, medium, price, year, route) {
    this.title = title;
    this.measures = measures;
    this.medium = medium;
    this.price = price;
    this.year = year;
    this.route = route;
}
//Creo el objeto 1 de una obra
let artwork1 = new Artwork("Universitaria", "21 x 29.7 cm", "Tinta sobre cartulina", "$480", "2023", "img/art/cuadro1.jpg");
//Creo el objeto 2 de una obra
let artwork2 = new Artwork("La mujer de azul", "29,7 x 42 cm", "Acrílico sobre lienzo", "$350", "2019", "img/art/cuadro2.jpg");
//Creo el objeto 3 de una obra
let artwork3 = new Artwork("Guardaba el cajón", "21 x 29.7 cm", "Tinta acrílica sobre cartulina", "$400", "2022", "img/art/cuadro3.jpg");
//Creo el objeto 4 de una obra
let artwork4 = new Artwork("Atónito", "50 x 80 cm", "Spray sobre madera", "$523", "2021", "img/art/cuadro4.jpg");
//Creo el objeto 5 de una obra
let artwork5 = new Artwork("Yendo a la guerra", "29.7 x 42 cm", "Lápices/Acuarelas sobre cartulina", "$210", "2023", "img/art/cuadro5.jpg");
//Creo el objeto 6 de una obra
let artwork6 = new Artwork("Primavera e Indio", "60 x 60 cm", "Acrílico sobre madera blanca", "$400", "2022", "img/art/cuadro6.jpg");
//Creo el objeto 7 de una obra
let artwork7 = new Artwork("Divorcio en el techo", "35 x 50cm", "Tinta acrílica sobre cartulina", "$400", "2022", "img/art/cuadro7.jpg");
//Array con strings que guardan cada objeto de obra
const IMG_ARRAY = [artwork1, artwork2, artwork3, artwork4, artwork5, artwork6, artwork7];
//Contiene el elemento de la primera imagen del carrousel
const IMAGE_1 = document.createElement("img");
//Contiene el elemento de la segunda imagen del carrousel
const IMAGE_2 = document.createElement("img");
//Contiene el elemento de la tercera imagen del carrousel
const IMAGE_3 = document.createElement("img");
//Array que contiene las posiciones inicializadas de las tres imágenes del carrousel
let arrayCount = [0, 1, 2];

let image1ArtworkObject;
let image2ArtworkObject;
let image3ArtworkObject;
//Rellenamos inicialmente el carrousel con las imágenes por defecto
for (let i = 0; i < NUMBER_OF_ELEMENTS; i++) {
    switch(i) {
        case 0:
            insertArrowIntoCarrousel(i);
            break;
        case 1:
            const IMG_CONTAINER = document.createElement("div");
            IMG_CONTAINER.classList.add("nosik-img-container");
            CARROUSEL.appendChild(IMG_CONTAINER);
            for (let n = 0; n < NUMBER_OF_IMAGES; n++) {
                switch(n) {
                    case 0:
                        image1ArtworkObject = IMG_ARRAY[arrayCount[0]];
                        IMAGE_1.src = image1ArtworkObject.route;
                        IMAGE_1.setAttribute("alt", "paiting");
                        IMAGE_1.classList.add("nosik-carousel-secondary-pic");
                        IMAGE_1.id = "pic-1";
                        IMG_CONTAINER.appendChild(IMAGE_1);
                        break;
                    case 1:
                        image2ArtworkObject = IMG_ARRAY[arrayCount[1]];
                        IMAGE_2.src = image2ArtworkObject.route;
                        IMAGE_2.setAttribute("alt", "paiting");
                        IMAGE_2.id = "pic-2";
                        IMG_CONTAINER.appendChild(IMAGE_2);
                        break;
                    case 2:
                        image3ArtworkObject = IMG_ARRAY[arrayCount[2]];
                        IMAGE_3.src = image3ArtworkObject.route;
                        IMAGE_3.setAttribute("alt", "paiting");
                        IMAGE_3.classList.add("nosik-carousel-secondary-pic");
                        IMAGE_3.id = "pic-3";
                        IMG_CONTAINER.appendChild(IMAGE_3);
                    default:
                        break;
                }
            }
        case 2:
            insertArrowIntoCarrousel(i);
        default:
            break;
    }
}
//Inicializa las imágenes al del valor del correspondiente índice de cada imagen
function inicializateImages() {
    image1ArtworkObject = IMG_ARRAY[arrayCount[0]];
    IMAGE_1.src = image1ArtworkObject.route;
    image2ArtworkObject = IMG_ARRAY[arrayCount[1]];
    IMAGE_2.src = image2ArtworkObject.route;
    image3ArtworkObject = IMG_ARRAY[arrayCount[2]];
    IMAGE_3.src = image3ArtworkObject.route;
}
//Evento de rotación para la flecha izquierda del carrousel
LEFT_ARROW.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        arrayCount[i] = (arrayCount[i] + 1) % IMG_ARRAY.length;
    }
    inicializateImages();
});
//Evento de rotación para la flecha derecha del carrousel
RIGHT_ARROW.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        arrayCount[i] = (arrayCount[i] - 1 + IMG_ARRAY.length) % IMG_ARRAY.length;
    }
    inicializateImages();
});



// Redirección de la imagen 1 del carrousel a la página art-piece.html
IMAGE_1.addEventListener("click", function() {
    let url = `pages/art-piece.html?name=${encodeURIComponent(image1ArtworkObject.title)}&year=${encodeURIComponent(image1ArtworkObject.year)}&description=${encodeURIComponent(image1ArtworkObject.medium)}&dimensions=${encodeURIComponent(image1ArtworkObject.measures)}&price=${encodeURIComponent(image1ArtworkObject.price)}&image=${encodeURIComponent(`/${image1ArtworkObject.route}`)}`;
    window.location.href = url;
});


// Redirección de la imagen 2 del carrousel a la página art-piece.html
IMAGE_2.addEventListener("click", function() {
    let url = `pages/art-piece.html?name=${encodeURIComponent(image2ArtworkObject.title)}&year=${encodeURIComponent(image2ArtworkObject.year)}&description=${encodeURIComponent(image2ArtworkObject.medium)}&dimensions=${encodeURIComponent(image2ArtworkObject.measures)}&price=${encodeURIComponent(image2ArtworkObject.price)}&image=${encodeURIComponent(`/${image2ArtworkObject.route}`)}`;
    window.location.href = url;
});

// Redirección de la imagen 3 del carrousel a la página art-piece.html
IMAGE_3.addEventListener("click", function() {
    let url = `pages/art-piece.html?name=${encodeURIComponent(image3ArtworkObject.title)}&year=${encodeURIComponent(image3ArtworkObject.year)}&description=${encodeURIComponent(image3ArtworkObject.medium)}&dimensions=${encodeURIComponent(image3ArtworkObject.measures)}&price=${encodeURIComponent(image3ArtworkObject.price)}&image=${encodeURIComponent(`/${image3ArtworkObject.route}`)}`;
    window.location.href = url;
});