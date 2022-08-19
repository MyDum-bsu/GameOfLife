let canvas = null;
let BJ_image;
let life_image;
let filelist = ['music/JudasPriest-Genocide.mp3'];
let current = 0
let playlist = [];
let PinkFloyd;
let JudasPriest;
let startMenuFlag = true;

function setup() {
  // for (let filename of filelist) {
  //   playlist.push(loadSound(filename));
  // }
  // nowPlaying = playlist[current];
  PinkFloyd = loadSound('music/PinkFloyd-HeyYou.mp3');
  //JudasPriest = loadSound('music/JudasPriest-Genocide.mp3');
  canvas = createCanvas(1920, 1076);
  canvas.parent('canvas');
   Initialization();
   CreateSettings();
   CloseSettings();

  BJ_Initialization();
 //frameRate(60);
}

function draw() {
  //BJReaction();
  if (startMenuFlag) {
    startMenu();
  } else {
    GameLife();
  }
  // if (!nowPlaying.isPlaying()) {
  //   next();
  // }
}

// function next() {
//   current++;
//   if (current > playlist.length - 1) {
//     current = 0;
//   }
//   nowPlaying = playlist[current];
//   nowPlaying.play();
// }

function startMenu() {
  background(0,0,0);
  fill(80,80,80);
  //fill(40,40,40);
  rect(width / 2 - 160, 170, 105, 40, 5, 5);
  rect(width / 2 - 170, 270, 70, 40, 5, 5);
  rect(width / 2 - 160, 370, 105, 40, 5, 5);
  rect(width / 2 - 207, 470, 37, 40, 5, 5);
  rect(width / 2 - 162, 570, 37, 40, 5, 5);
  rect(width / 2 - 50, 670, 67, 40, 5, 5);
  rect(width / 2 + 309, 670, 67, 40, 5, 5);

  //let abc = rect(width / 2 - 160, 770, 105, 40, 5, 5);
  //abc.mousePressed(playPinkFloyd);
  fill(255, 255, 255);
    textSize(50);
    textFont('Courier');
    textAlign(CENTER);
    text("Conway's Game of Life", width/2, 100);
    textSize(30);
    text('press ENTER to start the game', width/2, 200);
    text('press ESC to open the settings', width/2, 300);
    text('press SPACE to pause the game', width/2, 400);
    text('press E to erase the playing field', width/2, 500);
    text('press M to pause / play music', width/2, 600);
    text('add a cell on the LMB , remove on the PCM', width/2, 700);
    
    
}

// function playPinkFloyd() {
//   PinkFloyd.play();
// }