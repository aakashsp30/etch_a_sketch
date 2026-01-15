const container = document.querySelector('.container');
const gridSize = 16;
const totalSquares = gridSize * gridSize;

for(let i = 0; i < totalSquares; i++){
    const square = document.createElement('div');
    square.classList.add('box');
    container.appendChild(square);
}