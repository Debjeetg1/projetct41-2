const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world

var bruce , bruceimg;
var umbrella1;
var droplets1;

var height = 700;

var drops = []
var maxDroplets =1500;

var img1  ,img2 , img3, img4 ;

var thunderbolt



function preload()
{
    img1 = loadImage("images/thunderbolt/1.png");
    img2 = loadImage("images/thunderbolt/2.png");
    img3 = loadImage("images/thunderbolt/3.png");
    img4 = loadImage("images/thunderbolt/4.png");
}


function setup(){
   
    createCanvas(1500 , 700);
 
    engine = Engine.create();
    world = engine.world;
    
    umbrella1 = new Umbrella(150 , 300);
        if(frameCount % 5 === 0)
        {
         for(var i = 0 ;i < maxDroplets; i++)
            {
                 drops.push(new Droplets(random(0,1500) , random(0 , 1500)) );
                 
      
            }
        }
  
      
  
}

function draw(){

    background(1);

 
    Engine.update(engine);

   umbrella1.display();



  if(frameCount % 50 === 0)
  {
  
    thunderbolt = createSprite(random(0 , 1500 ) , 50 , 20 ,20);
    thunder.visible = false;

   var rand = Math.round(random(0, 4));

   thunderbolt.visible = true;
  
   thunderbolt.addImage(img1);

   
  thunderbolt.scale = 0.5;

   switch(rand)
   {
     case 1:  thunderbolt.addImage(img1);
     break;
     case 2: thunderbolt.addImage(img2);
     break;
     case 3: thunderbolt.addImage(img3);
     break;
     case 4: thunderbolt.addImage(img4);  
   
  
   }
       
   thunderbolt.visible = true;

   setTimeout(thunder, 1111); 

  }
  
  

 
  

 

   for(var j = 0 ; j < drops.length ; j++)
   {
       drops[j].display();
       drops[j].update();
     
   }

  


 
   
 
    drawSprites();
}   

function thunder()
{
    
     thunderbolt.destroy();
} 

