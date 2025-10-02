// Create grid
const container = document.querySelector("#container");

let numRows = 16;
let numColumns = 16;

for (i = 0; i < numColumns; i++) {
    const makeColumn = document.createElement("div");
    makeColumn.classList.add("column");
    container.appendChild(makeColumn);

    if (numRows > 1) {
        for (j = 0; j < numRows; j++) {
            const makeRow = document.createElement("div");
            makeRow.classList.add("row");
            makeColumn.appendChild(makeRow);
        }
    }
}

// Hover effect
function changeColor() {
    this.style.backgroundColor = "blue";
}

const boxes = document.querySelectorAll(".row");

for (let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("mouseover",changeColor);
}