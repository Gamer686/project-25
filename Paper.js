class Paper{
    constructor(){
        var options ={
            
            restitution:0,
            friction:0,
            density:1.2
    }

this.body = Bodies.circle(100,300,10,options);
this.width = 33;
this.image = loadImage("paper.png");
World.add(world,this.body);

   }
   display(){
       push()
       var pos = this.body.position;
       var angle = this.body.angle;
       fill("White");
       rotate(angle);
       imageMode(CENTER);
       image( this.image,pos.x,pos.y,this.width,this.width);
       pop()
   }
}