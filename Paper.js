class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0,
            friction:0,
            density:1.2
    }

this.body = Bodies.circle(100,300,radius,options);
this.radius = radius*2;
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
       image( this.image,pos.x,pos.y,this.radius*2,this.radius*2);
       pop()
   }
}