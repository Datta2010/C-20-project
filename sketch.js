var  bg,sleep,bath,brush,gym,move,drink,eat;
var iss,astronout;

function preload(){
  bg= loadImage("iss.png");
  bath=loadAnimation("bath1.png","bath2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move1.png","move2.png");
} 

function setup() {
  createCanvas(800,400);

iss=createSprite(200,200);
iss.addImage(bg);
iss.scale=0.1;

astronout=createSprite(300,230);
astronout.addAnimation("sleep",sleep);
astronout.scale=0.1;
}

function draw() {
  background(255);  
  
if(keyDown("UP_ARROW")) {
astronout.addAnimation("brushing",brush);
astronout.changeAnimation("brushing");
astronout.y=200;
astronout.velocityX=0;
astronout.velocityY=0;
}

if(keyDown("DOWN_ARROW")) {
  astronout.addAnimation("gyming",gym);
  astronout.changeAnimation("gyming");
  astronout.y=200;
  astronout.velocityX=0;
  astronout.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")) {
    astronout.addAnimation("eating",eat);
    astronout.changeAnimation("eating");
    astronout.y=200;
    astronout.velocityX=0;
    astronout.velocityY=0;
    }

    if(keyDown("RIGHT_ARROW")) {
      astronout.addAnimation("bathing",bath);
      astronout.changeAnimation("bathing");
      astronout.y=200;
      astronout.velocityX=0;
      astronout.velocityY=0;
      }

      if(keyDown("m")) {
        astronout.addAnimation("moving",move);
        astronout.changeAnimation("moving");
        astronout.y=200;
        astronout.velocityX=0;
        astronout.velocityY=0;
        }

        if(keyDown("d")) {
          astronout.addAnimation("drinking",drink);
          astronout.changeAnimation("drinking");
          astronout.y=200;
          astronout.velocityX=0;
          astronout.velocityY=0;
          } 

  drawSprites();
}