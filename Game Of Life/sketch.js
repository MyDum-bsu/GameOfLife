function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows)
    for (let j = 0; j < rows; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

  let canvas = null;
  var grid;
  var cols;
  var rows;
  var resolution;
  var mode;
  let Rslider;
  let Sslider;
  var randomMode;

function setup() {
  mode = 0;
  randomMode = 1;
  canvas = createCanvas(1920, 951);
  canvas.parent('canvas');

  Rslider = createSlider(2, 200, 5, 1);
  Sslider = createSlider(1, 60, 60, 1);
  resolution = Rslider.value();
  frameRate(Sslider.value());
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  grid = make2DArray(cols, rows);
}

function keyPressed() {
  if (keyCode === ENTER && !mode) {
    mode = 1;

  } else if (keyCode === ENTER && mode) {
    mode = 0;
  }
}

function draw() {
  
  ChangeResolution();

  ChangeSpeed();

  AddRemoveOnMouseClick(grid);

  if (mode == 1) {  
    background(30);
    if (randomMode == 1) {
      fillGrid(grid, cols, rows);
      randomMode = 0;
    }
    drawGrid(grid);   
    grid = nextGeneration(grid);
  }
}

function countNeighbors(grid, x, y) {
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

 function fillGrid(grid, cols, rows) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
 }

 function ChangeResolution() {
  if (resolution != Rslider.value()) {
    background(30);
    randomMode = 1;
    resolution = Rslider.value();
    cols = floor(width / resolution);
    rows = floor(height / resolution);
    grid = make2DArray(cols, rows);
  }
 }

 function ChangeSpeed() {
  if (frameRate() != Sslider.value()) {
    frameRate(Sslider.value());
  }
 }

 function ValidateMousePosition(x, y) {
   return x >= 0 && y >= 0 && x < cols && y < rows;
 }
 
 function fillCell(i, j) {
  let x = i * resolution;
  let y = j * resolution;
  fill(90);
  stroke(200);
  rect(x, y, resolution - 1, resolution - 1);
 }

 function removeCell(i, j) {
  let x = i * resolution;
  let y = j * resolution;
  fill(30);
  stroke(30);
  rect(x, y, resolution, resolution);
 }

 function nextGeneration(grid) {
  let next = make2DArray(cols, rows);
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
  return next;
 }

 function drawGrid(grid) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fillCell(i, j);
      }
    }
  } 
 }

function AddRemoveOnMouseClick(grid) {
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      var x = floor(mouseX / resolution);
      var y = floor(mouseY / resolution);
      if (ValidateMousePosition(x, y) == 1) {
        grid[x][y] = 1;
        fillCell(x, y);
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
