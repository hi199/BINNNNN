const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var packageSprite
var dropsonep1,dropsonep2,dropsoenp3
var packageBody,ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
    dropsonep1=createSprite(400, 350, 20,5);
	dropsonep2=createSprite(420, 340, 20,5);
	dropsonep3=createSprite(380, 80, 10,5);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === LEFTARROW) {
	    packageBody.velocityx=10
	}   
	} 
   


