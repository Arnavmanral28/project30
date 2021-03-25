class Polygon{
    constructor(x,y,r){
        var polyOptions={
            isStatic: false,
            density: 5
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2),polyOptions;
        this.image = loadImage("polygon.png");

        World.add(world,this.body);




    }
    display(){

        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2)
        pop();



    }
}