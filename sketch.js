var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50,300, 75, 50);
  wall = createSprite(500,300,60,height/2);
  wall.shapeColor = rgb(80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
  deformation = 0.5*weight*speed*speed/22500;
  console.log(deformation);
  car.collide(wall);
}

function draw() {
  background(255,255,255);
  isTouching()
  if(car.isTouching(wall)){
    if(deformation < 100){
      car.shapeColor = 'green';
    }
    if(deformation > 100 && deformation <180){
      car.shapeColor = 'yellow';
    }
    if(deformation > 180){
      car.shapeColor = 'red';
    }
  }
  drawSprites();
  fill('black');
  textSize(30);
  text("|Car safety test|",230,50);
  textSize(22);
  text("Weight : "+weight,50,100);
  text("Speed : "+speed,50,135);
  text("Deformation : "+deformation,50,170);
}

function isTouching(){
  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x  < car.width/2 + wall.width/2 && car.y - wall.y<car.height/2 + wall.height/2 && wall.y - car.y  <  car.height/2 + wall.height/2){
    car.x = 440;
  }
}