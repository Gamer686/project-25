class Ground{
    constructor(){
        var options ={
            isstatic:true
        }
        this.body =Bodies.rectangle(width/2,680,800,20,options);
        this.width = width/2;
        this.heigth = 20;
        World.add(world,this.body);
    }
display(){
    Push()
    var pos = this.body.position;
    rectMode(CENTER);
    fill("yellow")
rect(pos.x,pos.y,this.width,this.heigth);
    Pop()
}
}



