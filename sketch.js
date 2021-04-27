const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon;
var polygon_img;

function preload(){
polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //tower 2 bottom layer
  block_1 = new Block(660,180,30,40);
  block_2 = new Block(680,180,30,40);
  block_3 = new Block(700,180,30,40);
  block_4 = new Block(720,180,30,40);
  block_5 = new Block(740,180,30,40);

  //tower 2 2nd layer
  block_6 = new Block(680,160,30,40);
  block_7 = new Block(700,160,30,40);
  block_8 = new Block(720,160,30,40);

  //top
  block_9 = new Block(700,140,30,40);


  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

 slingshot=new Slingshot(this.polygon,{x:50,y:200});
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}


function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();


  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block_9.display();


  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block_6.display();
  block_7.display();
  block_8.display();

  fill("grey");
  block16.display();
  slingshot.display();
image(polygon_img,polygon.position.x,polygon.position.y,40,40);


}
