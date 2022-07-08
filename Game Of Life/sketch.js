function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

  let canvas = null;
  var grid;
  var cols;
  var rows;
  var resolution;
  var resolutionChanged;
  var speedChanged;
  var mode;
  let slider;

function setup() {
  mode = 0;
  resolutionChanged = 0;
  speedChanged = 0;
  //noCursor();
  //frameRate(); 

  canvas = createCanvas(1920, 973);
  canvas.parent('canvas');

  Rslider = createSlider(2, 150, 10, 1);
  Sslider = createSlider(1, 60, 60, 1);
  resolution = Rslider.value();
  frameRate(Sslider.value());
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  grid = make2DArray(cols, rows);
  fillGrid();
}

function keyPressed() {
  if (keyCode === ENTER && !mode) {
    mode = 1;

  } else if (keyCode === ENTER && mode) {
    mode = 0;
  }
}

function draw() {
  //clear();
  
  if (resolutionChanged || speedChanged) {
    resolution = Rslider.value();
    frameRate(Sslider.value());
    cols = floor(width / resolution);
    rows = floor(height / resolution);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = floor(random(2));
      }
    }
    resolutionChanged = 0;
    speedChanged = 0;
  }

  if (mode == 1) {  
    background(30);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * resolution;
          let y = j * resolution;
          if (grid[i][j] == 1) {
            fill(90);
            stroke(200);
            rect(x, y, resolution - 1, resolution - 1);
          }
        }
      }  
  
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
  
    grid = next;
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

 function fillGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
 }

function touchEnded() {
  resolutionChanged = 1;
  speedChanged = 1;
}
