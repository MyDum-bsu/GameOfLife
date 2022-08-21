let canvas = null;
let BJ_image;
let life_image;
let music_filelist = ['music/DeepPurple-A200.mp3', 'music/Pink-WelcomeToTheMachine.mp3', 'music/DeepPurple-SailAway.mp3', 'music/PinkFloyd-ShineOnYouCrazyDiamond.mp3',
 'music/Rainbow-CatchTheRainbow.mp3', 'music/PinkFloyd-HeyYou.mp3', 'music/DeepPurple-YouKeepOnMoving.mp3', 'music/DeepPurple-CoronariasRedig.mp3', 'music/Rainbow-RainbowEyes.mp3', 'music/JudasPriest-Genocide.mp3'];
let current;
let musiclist = [];
let nowPlaying;
let startMenuFlag = true;
let flag = true;
let paused = 0;

function preload() {
  for (let filename of music_filelist) {
    musiclist.push(loadSound(filename));
  }
}

function setup() {
  current = music_filelist.length - 1; // for music index
  nowPlaying = musiclist[current];
  canvas = createCanvas(1920, 1076);
  canvas.parent('canvas');
   Initialization();
   CreateSettings();
   CloseSettings();
  //BJ_Initialization();
  setInterval(function() {
    if (startMenuFlag) {
      EraseField();
      AddAnimationForMenu(width/2, height/2);
      //Add(width/2, height/2);
    }    
  }, 142000); // 84000
  
}

function draw() {
  //BJReaction();

  if (!nowPlaying.isPlaying() && !paused) {
     nextSong();
  }

  if (startMenuFlag) {
    startMenu();
    grid = nextGeneration();
  } else {
    GameLife();
  }
}



