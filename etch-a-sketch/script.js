// Create grid
const container = document.querySelector("#container");

let numColumns = 100;
let numRows = 100;

function changeNumColumns () {

}

function createGrid() {
    for (i = 0; i < numColumns; i++) {
        const makeColumn = document.createElement("div");
        makeColumn.classList.add("column");
        container.appendChild(makeColumn);

        if (numRows > 1) {
            for (j = 0; j < numRows; j++) {
                const makeRow = document.createElement("div");
                makeRow.classList.add("row");
                makeColumn.appendChild(makeRow);

                // Moving hover effect into function
                makeRow.addEventListener("mouseover", changeColor);
            }
        }
    }
    // Update the boxes after creating the grid
    boxes = document.querySelectorAll(".row");
}

// Hover effect
function changeColor() {
    this.style.backgroundColor = "black";
}

// Button functionality
const resetButton = document.getElementById("reset-button");

function resetColor() {
    boxes.forEach(box => {
        box.style.backgroundColor = "tan";
    });
}

resetButton.addEventListener("click", resetColor);

const sizeButton = document.getElementById("size-button");

function setGridSize() {
    const columnInput = document.getElementById("column-input");
    const rowInput = document.getElementById("row-input");
    numColumns = parseInt(columnInput.value);
    numRows = parseInt(rowInput.value);

    container.innerHTML = "";

    createGrid();

    document.getElementById("updatedColumns").textContent = `${numColumns} columns`;
    document.getElementById("updatedRows").textContent = `${numRows} rows`;
}

sizeButton.addEventListener("click", setGridSize)

createGrid();