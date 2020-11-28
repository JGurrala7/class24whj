const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, engine, world,dustbin,paper, wall, ceiling, shots;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  shots = 0;
  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,{isStatic: true});
  wall = Bodies.rectangle(790, height/2, 20, height, {isStatic: true});
  ceiling = Bodies.rectangle(width/2, 30, width, 10, {isStatic: true});
  World.add(world, ground);
  World.add(world, wall);
  World.add(world, ceiling)
}

function draw() { 
  textSize(30);
  fill("black");
  text("Shots Taken: " + shots, 100, 50);
	background("green");
    rectMode(CENTER);
    dustbin.display();
    paper.display();
}
function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 12, y: -13});
    shots = shots + 1;
  }
}