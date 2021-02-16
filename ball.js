class Ball{
    constructor(x,y,width,height){
        var options={
          density:1,
          frictionAir:0.001
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)


    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(CENTER)
        fill("white")
        ellipse(0,0,this.width,this.height)
        pop();


    }
}
