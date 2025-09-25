// Create grid
const container = document.querySelector("#container");

let numRows = 1;
let numColumns = 1;
const makeColumns = document.createElement("div");
const makeRows = document.createElement("div");

makeColumns.classList.add("column");
container.appendChild(makeColumns);


// for (i = 4; i < 4; i++) {
//     return makeColumns.classList.add("column");
// }