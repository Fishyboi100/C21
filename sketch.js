
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine,world
var wall1,wall2,wall3



function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,200,20,ball_options)

	World.add(world,ball);

	wall1 = new Ground(width/2,670,width,20)
	wall2 = new Ground(1100,600,20,120)
	wall3 = new Ground(1350,600,20,120)


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

	ellipse(ball.position.x,ball.position.y,20)

	wall1.show();
	wall2.show();
	wall3.show();

  drawSprites();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:0.04,y:-0.04})



	}



}

