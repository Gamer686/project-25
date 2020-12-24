
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,dustbin, paper;
var ground;
var binImg,bin;

function preload(){
binImg = loadImage("Images/dustbin.png");
}
function setup() {
	createCanvas(800, 700);
   rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

    bin = createSprite(610,619,100,200);
    bin.addImage(binImg);
     bin.scale = 0.45;
	leftWallDustbin = new DustBin(550,620,20,100);
	rightWallDustbin = new DustBin(670,620,20,100);
	bottomWallDustbin = new DustBin(610,660,100,20);
	
	paper = new Paper();
	ground= new Ground();
	 
	/* render = Matter.Render.create({element: document.body,engine:engine,                    
		options:{width:800,height:700}});
		Matter.Render.run(render);*/
}

function draw() {
   background();
   
   ground.display();
   leftWallDustbin.display();
   rightWallDustbin.display();
   bottomWallDustbin.display();
   paper.display();
  
   drawSprites();

 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-15});

	}
}



