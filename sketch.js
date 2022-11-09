
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Plane = Matter.World;


var engine; 
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	var participle_options={
	 restituition : 0.4,
	 friction : 0.02 

	}
	//Crie os Corpos aqui.
   
	var plane_options={
     isStatic:true 
	} 

	Engine.run(engine);
  
  block1 = Bodies.rectangle(30,30,40,20,plane_options);
  World.add(world,block1);

  block2 = Bodies.rectangle(30,30,40,100,plane_options);
  World.add(world,block2);

  rotate1 = Bodies.rectangle(250,200,150,20,plane_options);
  World.add(world,rotate1);

  rotate2 = Bodies.rectangle(250,200,150,20,plane_options);
  World.add(world,rotate2);


  Matter.Body.rotate(rotate1,angle1);
  Push();
  translate(rotator1,position.x,rotato1.position.y);
  rotate(angle1);
  rect (0,0,150,20);
  Pop(); 
  angle1+=0.2


  Matter.Body.rotate(rotate2,angle2);
  Push();
  translate(rotator2,position.x,rotato2.position.y);
  rotate(angle2);
  rect (0,0,150,20);
  Pop(); 
  angle1+=0.3;



  
}



function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine); 

  rect(block1.position.x,block1.position.y,300,30);
  rect(block2.position.x,block2.position.y,400,20);
  drawSprites();
 

}



