class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0,
            friction:0,
            density:1.2
    }

this.body = Bodies.circle(100,300,33,options);
this.radius = 33;
this.image = loadImage("paper.png");
World.add(world,this.body);

   }
   display(){
       push()
       translate
       var pos = this.body.position;
       var angle = this.body.angle;
       fill("White");
       rotate(angle);
       imageMode(CENTER);
       image( this.image,pos.x,pos.y,this.radius,this.radius);
       pop()
   }
}