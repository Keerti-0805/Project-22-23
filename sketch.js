var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

boxposition = width/2-100
boxY = 610
var options = {
	isStatic: true
}

boxleftsprite= createSprite(boxposition, boxY, 20, 100)
boxleftsprite.shapeColor= "blue"
boxleftbody= Bodies.rectangle(boxposition+20, boxY, 20, 100, options)
World.add(world,boxleftbody)

boxbasesprite= createSprite(boxposition+100, boxY+20, 200, 20)
boxbasesprite.shapeColor= "blue"
boxbotombody= Bodies.rectangle(boxposition+100, boxY+15, 200, 20, options)
World.add(world,boxbotombody)

boxleftsprite= createSprite(boxposition+200, boxY, 20, 100)
boxleftsprite.shapeColor= "blue"
boxrightbody= Bodies.rectangle(boxposition+180, boxY, 20, 100, options)
World.add(world,boxrightbody)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(pakageBody, false)
    
  }
  else if(keyCode === RIGHT_ARROW){
	  helicopterSprite.x += 20
	  translation = {x:20, y:0}
	  Matter.Body.translate(packageBody, translation)
	  
  }

  else if(keyCode === LEFT_ARROW){
	helicopterSprite.x -= 20
	translation = {x:20, y:0}
	Matter.Body.translate(packageBody, translation)
	
}
}



