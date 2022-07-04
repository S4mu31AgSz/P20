
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let plane;
let ball;
let square;
let rectangle;

function setup() {
	createCanvas(500,500);

	var plane_options = {
		isStatic : true
	}
	
	var ball_options = {
		restitution : 0.5,
		friction : 0.02,
		frictionAir : 0
	}

	var square_options = {
		restitution : 0.7,
		friction : 0.01,
		frictionAir : 0.1
	}

	var rectangle_options = {
		restitution : 0.01,
		friction : 1,
		frictionAir : 0.3
	}

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	plane = Bodies.rectangle(250,510,canvas.width,20,plane_options);
	World.add(world,plane);

	ball = Bodies.circle(220,10,25,ball_options);
	World.add(world,ball);
	square = Bodies.rectangle(110,50,30,30,square_options);
	World.add(world,square);
	rectangle = Bodies.rectangle(350,50,70,40,rectangle_options);
	World.add(world,rectangle);
	
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	fill(255,64,64);
}


function draw() {
  background(50,200,100);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,25);
  rect(square.position.x,square.position.y,30,30);
  rect(rectangle.position.x,rectangle.position.y,70,40);

  drawSprites();
 
}



