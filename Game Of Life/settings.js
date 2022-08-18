let Rslider;
let Sslider;
let Dslider;

let CellColorPicker;
let BackgroundColorPicker;
let inputBirthSurvive;
let RandomCheckBox;
let MultiColorCheckBox;
let ShapeSelect;

let resolution;
let density;

function CreateSettings() {
  inputBirthSurvive = createInput('B3/S23');
  inputBirthSurvive.position(width / 2, height / 2 + 110);
  inputBirthSurvive.center('horizontal');
  inputBirthSurvive.attribute('placeholder', 'B3/S23');
  inputBirthSurvive.input(ChangeRule);

  RandomCheckBox = createCheckbox('random', true);
  MultiColorCheckBox = createCheckbox('multi-color', false);
  RandomCheckBox.style('font-family', 'Courier');
  RandomCheckBox.style('background-color', color(0, 0, 0));
  RandomCheckBox.style('border-radius', '10px');
  RandomCheckBox.style('color', 'white');
  RandomCheckBox.position(width / 2 - 140, height / 2 -70);
  RandomCheckBox.changed(ChangeRandomMode);

  MultiColorCheckBox.style('font-family', 'Courier');
  MultiColorCheckBox.style('background-color', color(0, 0, 0));
  MultiColorCheckBox.style('border-radius', '10px');
  MultiColorCheckBox.style('color', 'white');
  MultiColorCheckBox.position(width / 2, height / 2 -70);
  MultiColorCheckBox.changed(ChangeMultiMode);
  
  ShapeSelect = createRadio();
  ShapeSelect.style('font-family', 'Courier');
  ShapeSelect.style('color', 'white');
  ShapeSelect.option('circle');
  ShapeSelect.option('rect');
  ShapeSelect.position(width / 2 - 25, height / 2 + 150);
  ShapeSelect.selected('rect');
  ShapeSelect.center('horizontal');
  ShapeSelect.style('background-color', color('black'));
  ShapeSelect.style('border', 0);
  ShapeSelect.changed(ChangeShape);


  Rslider = createSlider(2, 200, 5, 1);
  Sslider = createSlider(1, 240, 60, 1);
  Dslider = createSlider(2, 200, 9, 1);

  resolution = Rslider.value();
  frameRate(Sslider.value());
  density = Dslider.value();

  cols = floor(width / resolution);
  rows = floor(height / resolution);
  grid = makeGrid(cols, rows);   

  Rslider.position(width / 2 - 140, height / 2 - 200 + 40);
  Sslider.position(width / 2 - 140, height / 2 - 200 + 70);
  Dslider.position(width / 2 - 140, height / 2 - 200 + 100);

  CellColorPicker = createColorPicker(color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255))));
  CellColorPicker.position(width / 2, height / 2 - 20);
  CellColorPicker.center('horizontal');
  CellColorPicker.style('background-color', color('black'));
  CellColorPicker.style('border', 0);

  BackgroundColorPicker = createColorPicker(color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255))));
  BackgroundColorPicker.position(width / 2, height / 2 + 40);
  BackgroundColorPicker.center('horizontal');
  BackgroundColorPicker.style('background-color', color('black'));
  BackgroundColorPicker.style('border', 0);
}

function Settings() {
    setIsOpen = setIsOpen == 0 ? 1 : 0;
    if (setIsOpen) {
  
    Rslider.show();
    Sslider.show();
    Dslider.show();
    CellColorPicker.show();
    BackgroundColorPicker.show();
    inputBirthSurvive.show();
    RandomCheckBox.show();
    MultiColorCheckBox.show();
    ShapeSelect.show();
    openSettings();
    } else {
      CloseSettings();
      mode = 1;
    }
}

function CloseSettings() {
    clickAvailable = 1;
    
    Rslider.hide();
    Sslider.hide();
    Dslider.hide();
    
    CellColorPicker.hide();
    BackgroundColorPicker.hide();
  
    inputBirthSurvive.hide();
    RandomCheckBox.hide();
    MultiColorCheckBox.hide();
    ShapeSelect.hide();
}
  
function openSettings() {
    mode = 0;
    clickAvailable = 0;
  

  ChangeResolution();

  ChangeSpeed();

  ChangeDensity();

    fill(255, 255, 255);
    textSize(15);
    textFont('Courier');
    text('resolution',width / 2 + 60, Rslider.y + 14);
    text('speed',width / 2 + 60, Rslider.y + 44);
    text('density',width / 2 + 60, Rslider.y + 74);
    textAlign(CENTER);
    text('cell color', width / 2, height / 2 - 30);
    text('background color', width / 2, height / 2 + 30);
    text('field parameters', width / 2, height / 2 - 175);
    text('game rule', width / 2, height / 2 + 90);
}

function ChangeRule() {
    let i = 1;
    birth = [];
    survive = [];
    while (inputBirthSurvive.value()[i] != '/') {
      birth.push(inputBirthSurvive.value()[i]);
      i++;
    }
    i++;
    for (i; i < inputBirthSurvive.value().length; i++) {
      survive.push(inputBirthSurvive.value()[i]);
    }
    if (birth.length == 0) {
      birth = [3];
    } 
    if (survive.length == 0) {
      survive = [2, 3];
    }
  // interesting rules: 
  // B34/S234   B2/S012345678   B234/S23
  
}

function keyPressed() {
    if (key === ' ') {
      ChangeMode();
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

function ChangeResolution() {
    if (resolution != Rslider.value()) {
      updated = 1;
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
      if (randomMode == 1) {
        fillGrid(grid, cols, rows);
      }
    }
}

function ChangeRandomMode() {
    randomMode = randomMode == 1 ? 0 : 1;
}

function ChangeMultiMode() {
  MultiMode = MultiMode == 0 ? 1 : 0;
} 
  
function ChangeMode() {

    CloseSettings();
    setIsOpen = 0;
    mode = mode == 1 ? 0 : 1;
}

// function changePlayPicture() {
//   var playPauseImages = new Array('images/pause.png', 'images/play.png');
//   // var pp = document.getElementById("playpause");
//   // pp.src = playPauseImages[mode];
//   PlayButton.style('img', playPauseImages[mode]);
// }

function ChangeShape() {
  shape = ShapeSelect.value();
}
