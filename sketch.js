const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  var options={
    restitution:6
  }
  ground=Bodies.rectangle(400,390,800,20,ground_options);
  ball=Bodies.circle(200,100,20,options);
  World.add(world,ball);
  World.add(world,ground);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}