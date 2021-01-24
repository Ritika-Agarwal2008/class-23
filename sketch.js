const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,box1,box2
function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world

 box1=new Box(200,100,50,100);
 box2=new Box(220,50,100,50)
 ground=new Ground();
}

function draw() {
  Engine.update(engine)
  background(0); 
  box1.display();
  ground.display(); 
  box2.display();
  
 
}