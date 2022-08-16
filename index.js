let option = document.querySelectorAll('.buttons button');
let color = 'black';
let randomColorEnable = false;
let sizeOfBoard = document.querySelector('#sizeOfBoard');
let newSize;

function populateBoard(sizeOfBoard) {
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${sizeOfBoard.value}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${sizeOfBoard.value}, 1fr)`;
    board.style.border = " solid #000000"

    let amount = sizeOfBoard.value * sizeOfBoard.value;

    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');

        square.classList = 'littleBlock'

        //Event Listener
        square.addEventListener('mouseover', () => {
        
        if(randomColorEnable == true) {
            randomColor();
        }
        square.style.backgroundColor = color;
        })

        square.style.backgroundColor = '#E6E3E3';
        board.appendChild(square);
    }
}

//event listener for changing the size of the board

function changeSizeOfBoard() {
    
    populateBoard(sizeOfBoard)
    /* sizeOfBoard.addEventListener('input', populateBoard(newSize)); */
    console.log('hello');
}
sizeOfBoard.addEventListener('input', changeSizeOfBoard);
changeSizeOfBoard();


/*function colors*/

//rainbow color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    color = `rgb(${r}, ${g}, ${b})`;
    /* paint = color; */

    console.log(color);
}

function rainbowColor() {
    randomColorEnable = true;
}

//Black color
function blackColor() {
    color = 'black';
    randomColorEnable = false;
}

//Pick a color
let actualColor = document.querySelector('#pick');
actualColor.addEventListener('input', colorPicker);

function colorPicker() {
    color = actualColor.value;
    randomColorEnable = false;
}

//eraser
function defaultColor() {
    color = '#E6E3E3';
    randomColorEnable = false;
}

//change size of the board
console.log(sizeOfBoard);