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

  let canvas = null;
  var grid;
  var cols;
  var rows;

  var resolution;
  var density;

  var mode;
  var setIsOpen;
  var clickAvailable;

  let Rslider;
  let Sslider;
  let Dslider;

  let Rcolor;
  let Gcolor;
  let Bcolor;

  let birth = [];
  let survive = [];

  var randomMode;
  let menuImage = null;
  let playImage = null;
  let settingsImage = null;


function setup() {
  mode = 0;
  setIsOpen = 0;
  randomMode = 1;
  clickAvailable = 1;

  birth = [3];
  survive = [2, 3];

  canvas = createCanvas(1920, 892);
  canvas.parent('canvas');
 
  Rslider = createSlider(2, 200, 3, 1);
  Sslider = createSlider(1, 240, 60, 1);
  Dslider = createSlider(2, 200, 9, 1);

  Rslider.position(width / 2 - 140, height / 2 - 200 + 40);
  Sslider.position(width / 2 - 140, height / 2 - 200 + 70);
  Dslider.position(width / 2 - 140, height / 2 - 200 + 100);

  Rslider.hide();
  Sslider.hide();
  Dslider.hide();

  Rcolor = createSlider(0, 255, int(random(0, 255)), 1);
  Gcolor = createSlider(0, 255, int(random(0, 255)), 1);
  Bcolor = createSlider(0, 255, int(random(0, 255)), 1);

  Rcolor.position(width / 2 - 140, height / 2 - 200 + 190);
  Gcolor.position(width / 2 - 140, height / 2 - 200 + 220);
  Bcolor.position(width / 2 - 140, height / 2 - 200 + 250);

  Rcolor.hide();
  Gcolor.hide();
  Bcolor.hide();

  resolution = Rslider.value();
  frameRate(Sslider.value());
  density = Dslider.value();
  
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  grid = makeGrid(cols, rows);
}

function keyPressed() {
  if (key === ' ') {
    changeMode();
  }
  // fullscreen on F.
  if (keyCode === 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  if (keyCode === 27) {
    Settings();
  }
}


function draw() {

  ChangeResolution();

  ChangeSpeed();

  ChangeDensity();

  AddRemoveOnMouseClick(grid, resolution);

  if (setIsOpen == 1) {
      background(30);
      fill(3, 3, 3);
      rect(width / 2 - 150, height / 2 - 200, 300, 400, 50, 50);  
      drawGrid(grid);
      openSettings();  
  }
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

 function fillGrid(grid, cols, rows) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(density)) == 0;
    }
  }
 }

 function ChangeResolution() {
  if (resolution != Rslider.value()) {
    randomMode = 1;
    resolution = Rslider.value();
    cols = floor(width / resolution);
    rows = floor(height / resolution);
    grid = makeGrid(cols, rows);
  }
 }

 function ChangeSpeed() {
  if (frameRate() != Sslider.value()) {
    frameRate(Sslider.value());
  }
 }

 function ChangeDensity() {
  if (density != Dslider.value()) {
    density = Dslider.value();
    fillGrid(grid, cols, rows);
  }
  
 }

 function ValidateMousePosition(x, y) {
   return x >= 0 && y >= 0 && x < cols && y < rows;
 }
 
 function drawCell(i, j) {
  let x = i * resolution;
  let y = j * resolution;
  var redC = Rcolor.value();
  var greenC = Gcolor.value();
  var blueC = Bcolor.value();
  fill(redC, greenC, blueC);
  noStroke();
  rect(x, y, resolution - 1, resolution - 1 );
 }

 function removeCell(i, j) {
  let x = i * resolution;
  let y = j * resolution;
  fill(30);
  stroke(30);
  rect(x, y, resolution, resolution);
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

function changeMode() {
  mode = mode == 1 ? 0 : 1;
  changePlayPicture();
  closeSettings();
  setIsOpen = 0;
}

function changePlayPicture() {
  var playPauseImages = new Array('images/play.png', 'images/pause.png');
  var pp = document.getElementById("playpause");
  pp.src = playPauseImages[mode];
}

function Settings() {
  setIsOpen = setIsOpen == 0 ? 1 : 0;
  changePlayPicture();

  if (setIsOpen) {

  Rslider.show();
  Sslider.show();
  Dslider.show();
  
  Rcolor.show();
  Gcolor.show();
  Bcolor.show();
  openSettings();
  } else {
    closeSettings();
    mode = 1; 
  }
}

function closeSettings() {
  clickAvailable = 1;
  
  Rslider.hide();
  Sslider.hide();
  Dslider.hide();
  
  Rcolor.hide();
  Gcolor.hide();
  Bcolor.hide();
}

function openSettings() {
  mode = 0;
  clickAvailable = 0;

  fill(255, 255, 255);
  textSize(15);
  textFont('Courier');
  text('resolution',width / 2 + 60, Rslider.y + 14);
  text('speed',width / 2 + 60, Rslider.y + 44);
  text('density',width / 2 + 60, Rslider.y + 74);

  text('red',width / 2 + 60, Rslider.y + 164);
  text('green',width / 2 + 60, Rslider.y + 194);
  text('blue',width / 2 + 60, Rslider.y + 224);
  textAlign(CENTER);
  text('The color of cell', width / 2, Rslider.y + 120);
  text('field parameters', width / 2, height / 2 - 175);
  
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

// function changeRule() {
//   let i = 1;
//   birth = [];
//   survive = [];
//   while (document.getElementsByName("rule")[i] != '/') {
//     birth.push(document.getElementsByName("rule")[i]);
//     i += 2;
//   }

//   i++;
//   for (i; i < document.getElementsByName("rule").length; i++) {
//     survive.push(document.getElementsByName("rule")[i])
//   }
  
// }