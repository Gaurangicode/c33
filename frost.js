class Frost {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.5,
          friction:1.0,
          density:0.04,
      }
      this.body = Bodies.rectangle(random(1,800),10,30,30,options);
      this.image=loadImage("snow4.webp")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,30,30);
     
    }
  };
  