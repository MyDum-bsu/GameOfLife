let Rslider;
let Sslider;
let Dslider;

let Vslider;

let CellColorPicker;
let BackgroundColorPicker;
let inputBirthSurvive;
//let RandomCheckBox;
let MultiColorCheckBox;
let ShapeSelect;

let resolution;
let density;

function CreateSettings() {
  inputBirthSurvive = createInput('B3/S23');
  inputBirthSurvive.position(width / 2, height / 2 +75);
  inputBirthSurvive.center('horizontal');
  inputBirthSurvive.attribute('placeholder', 'B3/S23');
  inputBirthSurvive.input(ChangeRule);

  // RandomCheckBox = createCheckbox('random', true);
  // RandomCheckBox.style('font-family', 'Courier');
  // RandomCheckBox.style('background-color', color(0, 0, 0));
  // RandomCheckBox.style('border-radius', '10px');
  // RandomCheckBox.style('color', 'white');
  // RandomCheckBox.position(width / 2 - 140, height / 2 -70);
  // RandomCheckBox.changed(ChangeRandomMode);

  MultiColorCheckBox = createCheckbox('multi-color', false);
  MultiColorCheckBox.style('font-family', 'Courier');
  MultiColorCheckBox.style('background-color', color(0, 0, 0));
  MultiColorCheckBox.style('border-radius', '10px');
  MultiColorCheckBox.style('color', 'white');
  
  MultiColorCheckBox.position(width / 2, height / 2 +110);
  MultiColorCheckBox.center('horizontal');
  MultiColorCheckBox.changed(ChangeMultiMode);
  
  ShapeSelect = createRadio();
  ShapeSelect.style('font-family', 'Courier');
  ShapeSelect.style('color', 'white');
  ShapeSelect.option('circle');
  ShapeSelect.option('rect');
  ShapeSelect.position(width / 2 - 25, height / 2 + 20);
  ShapeSelect.selected('rect');
  ShapeSelect.center('horizontal');
  ShapeSelect.style('background-color', color('black'));
  ShapeSelect.style('border', 0);
  ShapeSelect.changed(ChangeShape);


  Rslider = createSlider(2, 200, 5, 1);
  Sslider = createSlider(1, 240, 60, 1);
  Dslider = createSlider(1, 200, 9, 1);

  Vslider = createSlider(0,1,0.20,0.01);

  resolution = Rslider.value();
  frameRate(Sslider.value());
  density = Dslider.value();

  cols = floor(width / resolution);
  rows = floor(height / resolution);
  grid = makeGrid(cols, rows);   

  Rslider.position(width / 2 - 140, height / 2 - 200 + 40);
  Sslider.position(width / 2 - 140, height / 2 - 200 + 70);
  Dslider.position(width / 2 - 140, height / 2 - 200 + 100);
  Vslider.position(width / 2 - 140, height / 2 -70);

  //CellColorPicker = createColorPicker(color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255))));
  //CellColorPicker = createColorPicker(color(94, 217, 158));
  CellColorPicker = createColorPicker(color(255, 255, 0));
  CellColorPicker.position(width / 2 - 100, height / 2 - 20);
  //CellColorPicker.center('horizontal');
  CellColorPicker.style('background-color', color('black'));
  CellColorPicker.style('border', 0);

  //BackgroundColorPicker = createColorPicker(color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255))));
  BackgroundColorPicker = createColorPicker(color(40,40,40));
  BackgroundColorPicker.position(width / 2 + 50, height / 2 - 20);
  //BackgroundColorPicker.center('horizontal');
  BackgroundColorPicker.style('background-color', color('black'));
  BackgroundColorPicker.style('border', 0);
}

function Settings() {
    setIsOpen = setIsOpen == 0 ? 1 : 0;
    if (setIsOpen) {
  
    Rslider.show();
    Sslider.show();
    Dslider.show();
    Vslider.show();
    CellColorPicker.show();
    BackgroundColorPicker.show();
    inputBirthSurvive.show();
    //RandomCheckBox.show();
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
    Vslider.hide();
    CellColorPicker.hide();
    BackgroundColorPicker.hide();
  
    inputBirthSurvive.hide();
    //RandomCheckBox.hide();
    MultiColorCheckBox.hide();
    ShapeSelect.hide();
}
  
function openSettings() {
    mode = 0;
    clickAvailable = 0;
  

  ChangeResolution();

  ChangeSpeed();

  ChangeDensity();

  ChangeVolume();

    fill(255, 255, 255);
    textSize(15);
    textFont('Courier');
    text('resolution',width / 2 + 60, Rslider.y + 14);
    text('speed',width / 2 + 60, Rslider.y + 44);
    text('density',width / 2 + 60, Rslider.y + 74);
    textAlign(CENTER);
    text('cell', width / 2 - 75, height / 2 - 30);
    text('background', width / 2 + 75, height / 2 - 30);
    text('field parameters', width / 2, height / 2 - 175);
    text('game rule', width / 2, height / 2 + 65);
    text('music volume', width / 2 + 60, height / 2 -56);
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
  // B34/S234 (1)   B(1!!)2/S012345678   B234/S23   B36/S23 (1) 
}

function keyPressed() {
  if (keyCode === 13 && startMenuFlag) {
    grid = makeGrid();
    startMenuFlag = false;
    mode = 1;
    MultiMode = 0;
    //nextSong();
    birth = [3];
  } else if (!startMenuFlag) {
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
    if (keyCode === 49) {
      AddGlider();
      randomMode = 0;
    }
    if (keyCode === 50) {
      AddGliderGun();
      randomMode = 0;
    }
    if (keyCode === 51) {
      AddGalaxy();
      randomMode = 0;
    }
    if (keyCode === 52) {
      AddShip();
      randomMode = 0;
    }
    if (keyCode === 53) {
      AddSpaceShip();
      randomMode = 0;
    }
    if (keyCode === 54) {
      AddCrab();
      randomMode = 0;
    }
    if (keyCode === 55) {
      addAnimationForMenu();
      randomMode = 0;
    }
    if (keyCode === 69) {
      EraseField();
    }
    if (keyCode === 77) {
      paused = paused == 1 ? 0 : 1;
      if (paused) {
        nowPlaying.pause();
      } else {
        nowPlaying.play();
      }
    }
    if (keyCode === RIGHT_ARROW) {
      nextSong();
    }
    if (keyCode === LEFT_ARROW) {
      prevSong();
    }
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

function ChangeVolume() {
  nowPlaying.setVolume(Vslider.value());
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

function nextSong() {
  current++;

  if (current > music_filelist.length - 1) {
    current = 0;
  }

  nowPlaying.stop();
  nowPlaying = musiclist[current];
  nowPlaying.play();
}

function prevSong() {
  current--;

  if (current < 0) {
    current = music_filelist.length - 1;
  }

  nowPlaying.stop();
  nowPlaying = musiclist[current];
  nowPlaying.play();
}