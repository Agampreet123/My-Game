class King{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image = loadImage("Pictures/King.png");
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        fill("red");
        imageMode(CENTER);
        image(this.image,0,0,150,150);
        pop();
    }
}