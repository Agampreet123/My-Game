const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var ocean,ship,island,engine,world,enemy1,bg,king,island,island1
function preload(){
    bg = loadImage("Pictures/bg.jpg");
}


function setup(){
    createCanvas(1300,800);
   
engine = Engine.create();
world = engine.world;
//ship = new Ship(900,500,20,20);
ship = createSprite(900,500,20,20);
ship.velocityX = -2
island1 = createSprite(200,300,40,40)
enemy1 = new Enemy(900,580,20);
king = new King(250,600,30);
island = new Island(100,500,30,30);

}
function draw(){
    background(bg);
    Engine.update(engine);
    ship.display(); 
    enemy1.display();
    king.display();
    island.display();
  drawSprites();
}
