class Dustbin {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.leftWall = Bodies.rectangle(x, y, 20, 200, options);
    this.rightWall = Bodies.rectangle(x + 180, y, 20, 200, options);
    this.bottomWall = Bodies.rectangle(x + 20, y + 180, 160, 20, options);
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.leftWall);
    World.add(world, this.rightWall);
    World.add(world, this.bottomWall);
    this.width = 200;
    this.height = 200;
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    //translate(this.leftWall.position.x, this.leftWall.position.y);
    //rotate(this.leftWall.angle);
    //translate(this.rightWall.position.x, this.rightWall.position.y);
    //rotate(this.rightWall.angle);
    //translate(this.bottomWall.position.x, this.bottomWall.position.y);
    //rotate(this.bottomWall.angle);
    imageMode(CENTER);
    image(this.image, this.x + 10, this.y - 70, this.width, this.height);
    pop();
  }
}
