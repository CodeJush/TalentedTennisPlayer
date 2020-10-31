
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint= Matter.Constraint;

var child, childFriend,childImg;
var ground,racket;
var parent;

function preload(){

childImg= loadImage("images/tennisboi.png");


}

function setup() {
	createCanvas(displayWidth-5, displayHeight-150);
	

	engine = Engine.create();
	world = engine.world;

	racket=new Racket(600,200,150,200);
	child= new PlayingCharacter(racket.body,{x:520, y:200});
	ground= new Ground(displayWidth/2,displayHeight-200, displayWidth,30);
	childFriend= new NonPlayingCharacter(700,300,120,130);
	parent= new NonPlayingCharacter(300,100,200,100)
	

Engine.run(engine);
  
}


function draw() {
  background(0);
  
 image(childImg,300,300,200,200);
 child.display();
 racket.display();
 ground.display();
 childFriend.display();
 parent.display();
 
  drawSprites();
 
}



