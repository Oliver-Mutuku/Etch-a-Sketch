const gridContainer = document.querySelector(".grid-container");
const resizeGrid = document.querySelector("#resize-button");
const randomColors = document.querySelector("#random-button");

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize**2; i++) {
        const square = document.createElement("div");
        square.style.width = `${450 / gridSize}px`;
        square.style.height = `${450 / gridSize}px`;
        square.classList.add("square");
        gridContainer.appendChild(square);

        square.addEventListener('mouseenter', () => {
            square.classList.add("hovered");
        });

      }
}
createGrid(gridSize);

function clearGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


resizeGrid.addEventListener('click', () => {
    let userGridSize = +prompt("What size of grid do you want? (Enter number between 1 and 100)");
    if (isNaN(userGridSize)) {
        alert("Please enter a valid number");
    } else if (userGridSize < 0) {
        alert("Please anter a number between 1 and 100");
    } else if (userGridSize > 100) {
        alert("Number should be less than 100");
    } else {
        clearGrid();
        createGrid(userGridSize);
    }
});


randomColors.addEventListener('click', () =>{
    console.log("Random");
});
