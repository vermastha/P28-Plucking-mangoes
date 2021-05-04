
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;
var gameState="onSling"

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(displayWidth, displayHeight);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  text("Press s to restart",50 ,70);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);

  if (keyCode===83){
    restart();
    console.log("hi")
  }
}
function restart(){
  
    Matter.Body.setPosition(mango1.body, {x:1100, y:100}) 
    Matter.Body.setPosition(mango2.body, {x:1170, y:130}) 
    Matter.Body.setPosition(mango3.body, {x:1010, y:140}) 
    Matter.Body.setPosition(mango4.body, {x:1000, y:70}) 
    Matter.Body.setPosition(mango12.body, {x:1100, y:70}) 
    Matter.Body.setPosition(mango6.body, {x:1000, y:230}) 
    Matter.Body.setPosition(mango7.body, {x:900, y:230}) 
    Matter.Body.setPosition(mango8.body, {x:1140, y:150}) 
    Matter.Body.setPosition(mango9.body, {x:1100, y:230}) 
    Matter.Body.setPosition(mango10.body, {x:1200, y:200}) 
    Matter.Body.setPosition(mango11.body, {x:1120, y:50}) 
    Matter.Body.setPosition(mango5.body, {x:900, y:60}) 
    //Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
   // Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	//  launcherObject.attach(stoneObj.body);
    
   // gameState="onSling";
  //  launcherObject.fly();
  
}

function mouseDragged()
{
  if(gameState!=="launched")
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
  if (gameState==="onSling")
	launcherObject.fly();
  gameState="launched";
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
    gameState="onSling";
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }