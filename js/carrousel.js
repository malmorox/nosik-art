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
    var arrowRoute;
    var arrowName;
    var id;
    var n;
    if(i === FIRST_POSITION) {
        arrowRoute = "img/left_arrow.svg";
        arrowName = "left-arrow";
        id = "left";
        n = 0;
    } else {
        arrowRoute = "img/right_arrow.svg";
        arrowName = "right-arrow";
        id = "right";
        n = 1;
    }
    ARROW_ARRAY[n].setAttribute("src", arrowRoute);
    ARROW_ARRAY[n].setAttribute("alt", arrowName);
    ARROW_ARRAY[n].classList.add("arrow");
    ARROW_ARRAY[n].id = id;
    CARROUSEL.appendChild(ARROW_ARRAY[n]);
}
//Número de elementos dentro del carrousel
const NUMBER_OF_ELEMENTS = 3;
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
//Array que contiene los elementos del DOM de las 3 imágenes del carrousel
const CARROUSEL_IMAGES_ARRAY = [IMAGE_1, IMAGE_2, IMAGE_3];
//Array que contiene las posiciones inicializadas de las tres imágenes del carrousel
let arrayCount = [0, 1, 2];
//Objeto de la imagen del carrousel de la obra 1 en función del valor de la posición 0 de arrayCount
let image1ArtworkObject;
//Objeto de la imagen del carrousel de la obra 2 en función del valor de la posición 1 de arrayCount
let image2ArtworkObject;
//Objeto de la imagen del carrousel de la obra 3 en función del valor de la posición 2 de arrayCount
let image3ArtworkObject;
//Array que guarda los objetos de las imágenes del carrousel
let ARTWORK_OBJECTS_ARRAY = [image1ArtworkObject, image2ArtworkObject, image3ArtworkObject];
//Inicializa las imágenes al del valor del correspondiente índice de cada imagen
function inicializateImages() {
    image1ArtworkObject = IMG_ARRAY[arrayCount[0]];
    IMAGE_1.src = image1ArtworkObject.route;
    image2ArtworkObject = IMG_ARRAY[arrayCount[1]];
    IMAGE_2.src = image2ArtworkObject.route;
    image3ArtworkObject = IMG_ARRAY[arrayCount[2]];
    IMAGE_3.src = image3ArtworkObject.route;
}
//Declaramos el contenedor que contendrá las imágenes del carrousel
const IMG_CONTAINER = document.createElement("div");
//Rellenamos inicialmente el carrousel con las imágenes por defecto
for (let i = 0; i < NUMBER_OF_ELEMENTS; i++) {
    if(i !== 1) {
        insertArrowIntoCarrousel(i);
    } else {
        IMG_CONTAINER.classList.add("nosik-img-container");
        CARROUSEL.appendChild(IMG_CONTAINER);
        for (let n = 0; n < 3; n++) {
            if(n === 0 || n === 2) {
                CARROUSEL_IMAGES_ARRAY[n].classList.add("nosik-carousel-secondary-pic");
            }
            ARTWORK_OBJECTS_ARRAY[n] = IMG_ARRAY[arrayCount[n]];
            CARROUSEL_IMAGES_ARRAY[n].src = IMG_ARRAY[arrayCount[n]].route;
            CARROUSEL_IMAGES_ARRAY[n].setAttribute("alt", "paiting");
            CARROUSEL_IMAGES_ARRAY[n].id = `pic-${n + 1}`;
            IMG_CONTAINER.appendChild(CARROUSEL_IMAGES_ARRAY[n]);
        }
    }
    
}
//Después 
inicializateImages();
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
CARROUSEL_IMAGES_ARRAY[0].addEventListener("click", function() {
    let url = `pages/art-piece.html?name=${encodeURIComponent(image1ArtworkObject.title)}&year=${encodeURIComponent(image1ArtworkObject.year)}&description=${encodeURIComponent(image1ArtworkObject.medium)}&dimensions=${encodeURIComponent(image1ArtworkObject.measures)}&price=${encodeURIComponent(image1ArtworkObject.price)}&image=${encodeURIComponent(`/${image1ArtworkObject.route}`)}`;
    window.location.href = url;
});
// Redirección de la imagen 2 del carrousel a la página art-piece.html
CARROUSEL_IMAGES_ARRAY[1].addEventListener("click", function() {
    let url = `pages/art-piece.html?name=${encodeURIComponent(image2ArtworkObject.title)}&year=${encodeURIComponent(image2ArtworkObject.year)}&description=${encodeURIComponent(image2ArtworkObject.medium)}&dimensions=${encodeURIComponent(image2ArtworkObject.measures)}&price=${encodeURIComponent(image2ArtworkObject.price)}&image=${encodeURIComponent(`/${image2ArtworkObject.route}`)}`;
    window.location.href = url;
});
// Redirección de la imagen 3 del carrousel a la página art-piece.html
CARROUSEL_IMAGES_ARRAY[2].addEventListener("click", function() {
    let url = `pages/art-piece.html?name=${encodeURIComponent(image3ArtworkObject.title)}&year=${encodeURIComponent(image3ArtworkObject.year)}&description=${encodeURIComponent(image3ArtworkObject.medium)}&dimensions=${encodeURIComponent(image3ArtworkObject.measures)}&price=${encodeURIComponent(image3ArtworkObject.price)}&image=${encodeURIComponent(`/${image3ArtworkObject.route}`)}`;
    window.location.href = url;
});