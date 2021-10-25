var man, man_running;
var bg;



function preload(){
  bg = loadImage("background.png");
  man_running = loadAnimation("man1.png","man2.png","man3.png");
}


function setup() {
  createCanvas(800,400);
  man = createSprite(400,280,50,50);
  man.scale = 1.5;
  man.addAnimation("manRunning", man_running);
}

function draw() {
  background(bg);  
  drawSprites();
}