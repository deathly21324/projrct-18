var ship,shipImg,sea,seaImg
function preload(){
shipImg=loadAnimation("ship1.png","ship2.png")
seaImg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,40,40)
  sea.addImage(seaImg)
  sea.scale=0.5
  ship=createSprite(150,270,40,40)
  ship.addAnimation("sailing",shipImg)
 ship.scale=0.09
   
  
  
}

function draw() {
  background("blue");
  sea.velocityX=-10
  if(sea.x<0){
    sea.y=width/4
 }
  
 drawSprites()
}