
let canvas = null;
let BJ_image;
let life_image;

function preload() {
  BJ_image = loadImage('images/The_Belousov-Zhabotinsky_Reaction.gif');
  life_image = loadImage('images/life.gif');
}
function setup() {
  
  canvas = createCanvas(1920, 892);
  canvas.parent('canvas');
   Initialization();
   CreateSettings();
   CloseSettings();

  //BJ_Initialization();
  //fill(255, 255, 255);
  //  textSize(15);
  //  textFont('Courier');
  //textAlign(CENTER);
  //text('Choose the game:', width / 2, height / 2);
 
}


function draw() {
 // clear();
  //image(BJ_image, 100, height / 2 + 20);
  //image(life_image, 700, height / 2 + 20);
   //BJReaction();
  //GameLife();
 
}