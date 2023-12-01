/* DETALLES DE OBRA - REDIRECCION */
const ART_PIECE_DETAILS = document.querySelector('.nosik-art-piece');

const artPieceName = ART_PIECE_DETAILS.querySelector('.art-piece-info #name');
const artPieceYear = ART_PIECE_DETAILS.querySelector('.art-piece-info #year');
const artPieceDescription = ART_PIECE_DETAILS.querySelector('.art-piece-info #description');
const artPieceDimensions = ART_PIECE_DETAILS.querySelector('.art-piece-info #dimensions');
const artPiecePrice = ART_PIECE_DETAILS.querySelector('.art-piece-info #price');
const artPieceImage = ART_PIECE_DETAILS.querySelector('.image #image');
//asigna los valores del cuadro de la pagina 'Galería' en la página de detalles de la obra
console.log('fillInfoInToDetails is running');
let params = new URLSearchParams(window.location.search);
artPieceName.textContent = decodeURIComponent(params.get('name'));
artPieceYear.textContent = decodeURIComponent(params.get('year'));
artPieceDescription.textContent = decodeURIComponent(params.get('description'));
artPieceDimensions.textContent = decodeURIComponent(params.get('dimensions'));
artPiecePrice.textContent = decodeURIComponent(params.get('price'));
artPieceImage.src = decodeURIComponent(params.get('image'));
console.log(artPieceImage.src);
