class Droplets
{
    constructor(x , y)
    {
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 0.001
        }
        
        this.body = Bodies.circle(x,  y , 1 , options);
        this.color = "blue";
        this.radius = 2.5
 
        World.add(world , this.body)
      
    }

    display()
    {
        var pos = this.body.position;
        
        fill(this.color);
        circle(pos.x , pos.y , this.radius );
    }

     update()
     {
       if(this.body.position.y > height)
       {
           Matter.Body.setPosition(this.body , {x: random(0 , 1500)  , y: random(0 , 1500)})
       }
     }
}