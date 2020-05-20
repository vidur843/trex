var trex,trex_running,trex_collided;
var ground,invisibleground;
var cloudimg,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var cloudGroup,obstacleGroup;
var score=0;
function preload() {
   trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_colloided=loadImage("trex_collided.png");
  groundimg=loadImage("ground2.png");
  cloudimg=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup()   {
  createCanvas(600,300);
  trex=createSprite(50,280,20,30);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  ground=createSprite(300,280,600,10);
  ground.addImage("ground",groundimg);
  invisibleground=createSprite(300,290,600,10);
  invisibleground.visible=false;
  cloudGroup=new Group();
  obstacleGroup=new Group();
}
function draw() {
  background(180);
  score=score+Math.round(getFrameRate()/60);
  text("score="+score,500,100);
  trex.collide(invisibleground);
  ground.velocityX=-6;
  if(ground.x<0)   {
    ground.x=ground.width/2
  }
if(keyDown("space")&&trex.y>=250)    {
   trex.velocityY=-10;
 }
  trex.velocityY=trex.velocityY+0.8;
  
  spawnClouds();
  spawnObstacles();
  drawSprites();
}
 function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,220,40,10);
    cloud.y = Math.round(random(180,220));
    cloud.addImage(cloudimg);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
 
    //assign lifetime to the variable
    cloud.lifetime = 200;
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudGroup.add(cloud);
  }
 }
function spawnObstacles()  {
  if(frameCount% 60===0)  {
  var obstacle= createSprite(600,265);
var rand= Math.round(random(1,6));
  switch(rand)
  {
      case 1:obstacle.addImage(obstacle1);
      break;
      case 2:obstacle.addImage(obstacle2);
      break;
      case 3:obstacle.addImage(obstacle3);
      break;
      case 4:obstacle.addImage(obstacle4);
      break;
      case 5:obstacle.addImage(obstacle5);
      break;
      case 6:obstacle.addImage(obstacle6);
      break;
      default:break;
  }
    obstacle.velocityX=-6;
    obstacle.lifetime=100;
    obstacle.scale=0.5;
    obstacleGroup.add(obstacle);
  }
}