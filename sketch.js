var car, wall, speed, weight;

function setup() {
  createCanvas(1600,400);

  //assign random values to speed and weight
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
 // console.log(weight);

  //create car sprite
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  //console.log(speed);

  //create wall sprite
  wall = createSprite(1000,200,60,height/2);
  wall.shapeColor = color(80,80,80);
 
  
}

function draw() {
  background("white");  

  //check for collision
  if(wall.x - car.x < wall.width/2 + car.width/2){
      car.velocityX = 0;
      var deformation = Math.round(0.5 * weight * speed * speed / 22500);
      //console.log(deformation);
      if(deformation < 100){
         car.shapeColor = "green";
      }
      else if(deformation > 100 && deformation < 180){
         car.shapeColor = "yellow";
      }
      else {
          car.shapeColor = "red";
      }

  }
 

  drawSprites();
}