
var trex ,trex_running, groundImg;
var edges;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  edges=createEdgeSprites();
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.5
  ground=createSprite(260,190,600,20);
  ground.addImage(groundImg);
  ground.velocityX=-7
}

function draw(){
  background(220)
  if(keyDown("space"))
  {
    trex.velocityY=-10
  }
  trex.velocityY+=0.3
  trex.collide(ground);
  if(ground.x<0)
  {
    ground.x=ground.width/2
  }
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
}