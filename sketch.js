var wall, invisibleWall, car;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  invisibleWall = createSprite(1480, 200, 60, height/2);
  car = createSprite(50,200,50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  
  
}

function draw() {
  background("black");

  car.velocityX = speed;
  invisibleWall.shapeColor = color("black");
  wall.shapeColor = color("white");

  if (car.isTouching(wall) || car.isTouching(invisibleWall)){
    car.velocityX = 0;
  }
  
  if(invisibleWall.x-car.x <(car.width+invisibleWall.width/2)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

      if(deformation > 180){
        car.shapeColor = color(255,0,0);
      }

      if(deformation < 180 && deformation > 100){
        car.shapeColor = color(230,230,0);
      }

      if (deformation < 100){
        car.shapeColor = color(0,255,0);
      }
  }

  
  //if(car.collision === true){
 //   car.shapeColor = "pink"
 // }
  
  drawSprites();
}