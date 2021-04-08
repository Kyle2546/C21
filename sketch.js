var fixedRect, movingRect;
var car, wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200,100,50,30)
  wall = createSprite(1000,100,80,30)
  wall.shapeColor = "pink"
  car.shapeColor = "blue"
  car.velocityX = 4
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
///if (istouching(car,wall))
///{
  ///car.shapeColor = "yellow"
  ///car.velocityX = 0
///}
  bounceoff(car,wall)
  drawSprites();
}
