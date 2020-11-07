
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const paper = Matter.paper;
var paper
var line1,line2,line3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	line1 = createSprite(width/2,height-50,200,20);
    line1.shapeColor=color("red");
    line2 = createSprite(510,610,20,100);
    line2.shapeColor=color("red");
    line3 = createSprite(310,610,20,100);
    line3.shapeColor=color("red");

     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 
}



