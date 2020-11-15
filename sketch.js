var ghost, ghost_animation;



function preload() {
ghost_animation = loadAnimation("ghost3.png", "ghost1.png", "ghost2.png");
}

function setup(){
createCanvas(400,400);
ghost = createSprite(200,200,30,30);
  ghost.addAnimation("ghost",ghost_animation);
  ghost.scale =0.8;
}

function draw(){
  background("aqua");
  drawSprites();

  
}