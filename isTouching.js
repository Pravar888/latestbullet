if(wall.x - car.x < car.width/2 + wall.width/2  ) 
  {
   car.velocityX = 0.0;
   var deformation=0.5*weight*speed*speed/22500;
   if(deformation>180){
car.shapeColor = color(255,0,0);
   }
   if(deformation<180 && deformation > 100)
   {
car.shapeColor=color(230,230,0);
   }
   if(deformation<100)
   {
       car.shapeColor=color(0,255,0);
   }
  }