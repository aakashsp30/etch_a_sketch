const container = document.querySelector('.container');
const newGridBtn = document.querySelector('#newGridBtn');

function createGrid(size){
    container.innerHTML = '';

    const totalSquares = size * size;
    const squareSize = `calc(100% / ${size})`;

    for(let i = 0; i < totalSquares; i++){
        const square = document.createElement('div');
        square.classList.add('box');
        square.style.flex = `1 0 ${squareSize}`;
    
        square.addEventListener('mouseenter', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    
        container.appendChild(square);
    }
}

newGridBtn.addEventListener('click', () => {
    let size = prompt("Enter no of squares per side (max 100):");

    size = parseInt(size);

    if(isNaN(size) || size < 1){
        alert("Please enter a valid number!");
        return;
    }

    if(size > 100){
        alert("Maximum size is 100!");
        return;
    }

    createGrid(size);
});

createGrid(16);