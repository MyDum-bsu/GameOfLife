
let canvas = null;
  
function setup() {
  
  canvas = createCanvas(1920, 892);
  canvas.parent('canvas');

  Initialization();
  CreateSettings();
  CloseSettings();

  //BJ_Initialization();
}

function draw() {

  GameLife();
  //BJReaction();
}