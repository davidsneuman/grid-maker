// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let row = grid.insertRow(-1);
    let colLength = document.querySelector("tr").children.length;

    // first cell being added
    if (colLength === 0) {
        row.insertCell();
    }

    for (let i = 0; i < colLength; i++) {
        row.insertCell();
    }

}

// Add a column
function addC() {
    let rows = document.querySelectorAll("tr");

    rows.forEach(row => row.insertCell());

    // first cell being added
    if (rows.length === 0) {
        addR();
    }
}

// Remove a row
function removeR() {
    let grid = document.getElementById("grid");
    if (grid.children.length > 0) {
        grid.deleteRow(-1);
    }

}

// Remove a column
function removeC() {
    let rows = document.querySelectorAll("tr");

    rows.forEach(row => row.deleteCell(-1));
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}