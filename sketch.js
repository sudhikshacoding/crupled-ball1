const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ball1


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	
//var packageBody=createSprite(50,600,10,10)
	
	ground1= new Bucket(400,700,800,10);
	bucket1 = new Bucket(780,650,10,185);
    bucket2 = new Bucket(600,650,10,120);
	
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

 	//World.add(world, ground);
	 ball = Bodies.circle(100 , 680 , 15 , {restitution:0.8, isStatic:false,density:1.2,friction:0.5});
	 World.add(world, ball);

	Engine.run(engine);
}


function draw() {
  
  background(0);
  ground1.display();
  bucket1.display();
  bucket2.display();
  ellipse(ball.position.x,ball.position.y,20,20)
 // packageBody.position.x = mouseX;
  //pakageBody.position.y = mouseY;
  
}
function keyPressed(){
	if(keyCode===UP_ARROW)
	Matter.Body.applyForce(ball,ball.position,{x:40,y:22})
}



