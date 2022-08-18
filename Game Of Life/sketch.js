
let canvas = null;
let BJ_image;
let life_image;
let filelist = ['music/JudasPriest-Genocide.mp3'];
let current = 0
let playlist = [];

function setup() {
  // for (let filename of filelist) {
  //   playlist.push(loadSound(filename));
  // }
  // nowPlaying = playlist[current];
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
  GameLife();
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