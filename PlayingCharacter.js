class PlayingCharacter{

    constructor (body,anchor){
    
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.002,
            length: 0.001
        }

        this.bodyA= body;
        this.pointB=anchor;
        this.child= Constraint.create(options);


    World.add(world,this.child)

}

attach(body){
    this.child.bodyA=body; 
    
}

display(){

if (this.child.bodyA){
    var pointA= this.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(0.01);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}


}
}