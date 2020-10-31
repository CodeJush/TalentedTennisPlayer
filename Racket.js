class Racket{

    constructor (x,y,width,height){
var options= {
 isStatic: 0,
 restitution: 0,
 density:1,
 friction: 0.1

}
this.image=loadImage("images/tennis racket.svg")
   this.body= Bodies.rectangle(x,y,width,height,options)
   this.width=width;
   this.height=height;

    World.add(world,this.body)

}

display(){
var pos=this.body.position;

push();
translate(pos.x,pos.y);
rectMode(CENTER);
fill(230,130,100);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop()
}
}