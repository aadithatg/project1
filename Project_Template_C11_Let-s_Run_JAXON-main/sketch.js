var ground, invisibleGround, groundImage, invisibleGround2 ;
var guy, guy_running;

function preload() {

  //pre-load images
  guy_running = loadAnimation("Runner-1.png", "Runner-2.png");
  groundImage = loadImage("path.png");

}


function setup() {

  ground = createSprite(200,200,200,200);
  ground.addImage(groundImage);
  ground.x = ground.width /2;
  ground.velocityY = 4;

  invisibleGround = createSprite(5,200,200,200);
  invisibleGround2 = createSprite(395,200,200,200);

  invisibleGround.visible = false
  invisibleGround2.visible = false


  guy = createSprite(200,350,50,30)                               
  guy.addAnimation("running",guy_running);
  guy.scale = 0.05; 

  //create sprites here

}

function draw() {
  background(0);

if(ground.y > 400) {
   ground.y = ground.width / 2;

} 
guy.x = World.mouseX;
guy.collide(invisibleGround);
guy.collide(invisibleGround2);



console.log(guy.x)
  drawSprites();




}
