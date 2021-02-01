class Ship{
    constructor(x,y,width,height){
        var options={
            isStatic:true
            
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image = loadImage("Pictures/Ship.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push()
        var p = pos.x-20
        translate(p,pos.y);
        fill("brown");
        imageMode(CENTER);
        image(this.image,0,0)
        pop();
    }
}