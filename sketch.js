var sea;
var seaImage;
var ship,ship_moving;
function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(800,500);
  sea = createSprite(400,250,400,400);
sea.addImage(seaImage);
sea.scale = 0.4;
sea.velocityX = -2;

ship = createSprite(200,200,200,200);
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.5;
}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x = 400;
  }
 drawSprites();
}