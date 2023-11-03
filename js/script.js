// Tablero de juego
var container = document.getElementById("container");
container.innerHTML = "";
var numberOfRows = 8;
var numberOfColumns = 8;
const ARRAY_DIFFERENCE = 1;
var containerArray = [];
var rowArray = [];
var acc = 0;
for (let r = 0; r < numberOfRows; r++) {
    for (let c = 0; c < numberOfColumns; c++) {
        rowArray[c] = `<div class="field white" id="number-${acc + ARRAY_DIFFERENCE}"></div>`;
        container.innerHTML += rowArray[c];
        acc++;
    }
    containerArray[r] = rowArray;
    rowArray = [];
}

var acc_player = 0;
var numberOfColumn;

container.addEventListener("click", (event) => {
    var field = document.getElementById(event.target.id);
    var idField = event.target.id;
    if(field.className === "field white") {
        if(columnIsEmpty(idField)) {
            insertGamePiece(idField);
        }
    }
});

function getColumn(idField) {
    var stringField = `<div class="field white" id="${idField}"></div>`;
    for (let r = 0; r < numberOfRows; r++) {
        for (let c = 0; c < numberOfColumns; c++) {
            if(containerArray[r][c] === stringField) {
                numberOfColumn = c;
            }
        }
    }
    return numberOfColumn;
}

function getWhiteFields(numberOfColumn) {
    var numberOfId = numberOfColumn + 1;
    var difference = 8;
    var accColumn = 0;
    for(let r = 0; r < numberOfRows; r++) {
        if(containerArray[r][numberOfColumn] === `<div class="field white" id="number-${numberOfId}"></div>`) {
            accColumn++;
        }
        numberOfId += difference;
    }
    return accColumn;
}

function columnIsEmpty(idField) {
    var numberOfColumn = getColumn(idField);
    console.log(numberOfColumn);
    console.log(getWhiteFields(numberOfColumn));
    return getWhiteFields(numberOfColumn) > 0 ? true : false;
}

var playerCount = 0;

function insertGamePiece(idField) {
    var numberOfColumn = getColumn(idField);
    console.log(numberOfColumn);
    var numberOfWhiteFields = getWhiteFields(numberOfColumn);
    console.log(numberOfWhiteFields);
    var idNumber = (numberOfColumn + ARRAY_DIFFERENCE) * numberOfWhiteFields;
    console.log(idNumber);
    if(playerCount % 2 === 0) {
        containerArray[numberOfWhiteFields - ARRAY_DIFFERENCE][numberOfColumn] = `<div class="field red" id="${idNumber}"></div>`;
        
        reloadField(idField);
    }
}

function reloadField(idField) {
    var field = document.getElementById(idField);
    field.classList.replace("white", "red");
}