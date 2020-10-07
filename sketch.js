const Bodies = Matter.Bodies;

const World = Matter.World;

var rain=[]

var engine,world

function preload(){
    
}

function setup(){
  createCanvas(400,400);
  engine=Matter.Engine.create();
  world=engine.world;
}

function draw(){
  background(0,0,0)
  Matter.Engine.update(engine)
 // if(frameCount%100===0){
    //for(var i=0;i <100;i ++){
    rain.push(new Drops(random(0,400),random(0,400)))
   // }
  //} 
      for(var i=0;i <rain.length;i ++){
        rain[i].display();
       }
}   

