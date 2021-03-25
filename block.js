class Block{
    constructor(x, y, width, height) {
        var options = {

          density:0.0001
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255; 
        World.add(world, this.body);

      }
      display(){
        if(this.body.speed<4){
        var angle = this.body.angle;
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();

        } else{
          World.remove(world,this.body);
          push();
          this.visiblity = this.visiblity - 5;
          tint(255,this.visiblity);
          
          pop();
        }

      }
}