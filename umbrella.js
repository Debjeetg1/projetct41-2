class Umbrella
{
   constructor(x , y)
   {
    var options = {
       isStatic: true,
       
    }
    this.x = x ;
    this.y = y;
      this.bruceimg = loadImage("images/WalkingFrame/walking_8.png" )


    this.body = Bodies.circle(350  , 450 ,100 , options);
    this.radius = 50;

    World.add(world , this.body);

    
  
 
   }

   display()
   {
    
   
    image(this.bruceimg , this.x  , this.y , 350 , 350);

    
   }

 
   

    
}
