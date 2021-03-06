
var grid;
var cols;
var rows;

var mode;
var setIsOpen;
var clickAvailable;
var randomMode;
let updated;

let birth = [];
let survive = [];

function Initialization() {
    mode = 0;
    setIsOpen = 0;
    randomMode = 1;
    updated = 1;
  
    birth = [3];
    survive = [2, 3];
    
}

function makeGrid(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < cols; i++) {
      arr[i] = new Array(rows)
      for (let j = 0; j < rows; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
}

function fillGrid(grid, cols, rows) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = floor(random(density)) == 0;
      }
    }
}

function countNeighbors(x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
}

function drawCell(i, j) {
    let x = i * resolution;
    let y = j * resolution;
    fill(CellColorPicker.color());
    noStroke();
    rect(x, y, resolution - 1, resolution - 1 );
}

function removeCell(i, j) {
    let x = i * resolution;
    let y = j * resolution;
    fill(BackgroundColorPicker.color());
    stroke(BackgroundColorPicker.color());
    rect(x, y, resolution, resolution);
}
  
function drawGrid(grid) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] == 1) {
          drawCell(i, j);
        }
      }
    } 
}

function cellBirth(neighbors) { 
    for (let i = 0; i < birth.length; i++) {
      if (neighbors == birth[i]) {
        return true;
      }
    }
    return false;
}

function cellSurvive(neighbors) {
    for (let i = 0; i < survive.length; i++) {
      if (neighbors == survive[i]) {
        return true;
      }
    }
    return false;
}

function cellEvolve(next, i, j) {
    let state = grid[i][j];
    let neighbors = countNeighbors(i, j);
    if (state == 0 && cellBirth(neighbors)) {
      next[i][j] = 1;
    } else if (state == 1 && !cellSurvive(neighbors)) {
      next[i][j] = 0;
    } else {
      next[i][j] = state;
    }
}

function nextGeneration(grid) {
    let next = makeGrid(cols, rows);  
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        cellEvolve(next, i, j);
      }
    }
    return next;
}

function GameLife() {

  AddRemoveOnMouseClick(grid, resolution);

  if (setIsOpen == 1) {
      background(BackgroundColorPicker.color());
      drawGrid(grid);
      fill(0, 0, 0);
      rect(width / 2 - 150, height / 2 - 200, 300, 400, 50, 50);  
      
      openSettings();  
  }
  if (mode == 1) {      
    background(BackgroundColorPicker.color());
    if (randomMode == 1 && updated) {
      fillGrid(grid, cols, rows);
      updated = 0;
    }
    drawGrid(grid);
    grid = nextGeneration(grid);
  }
}

function AddRemoveOnMouseClick(grid, resolution) {
    if (mouseIsPressed === true && clickAvailable) {
      if (mouseButton === LEFT) {
        var x = floor(mouseX / resolution);
        var y = floor(mouseY / resolution);
        if (ValidateMousePosition(x, y) == 1) {
          grid[x][y] = 1;
          drawCell(x, y);
          randomMode = 0;
        }
      }
      if (mouseButton === RIGHT) {
        var x = floor(mouseX / resolution);
        var y = floor(mouseY / resolution);
        if (ValidateMousePosition(x, y) == 1) {
          grid[x][y] = 0;
          removeCell(x, y);
          }
      }
    }
}
  
function ValidateMousePosition(x, y) {
    return x >= 0 && y >= 0 && x < cols && y < rows;
}
  