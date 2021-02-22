const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var circle

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   

    var object_options ={
        restitution: 1.0
    }

    var ground1 ={
        isStatic: true
    }

    var circle1 ={
        isStatic: true

    }

   object= Bodies.rectangle(200,200,10,10,object_options);
    World.add(world,object);
    ground= Bodies.rectangle(200,390,400,10,ground1);
    World.add(world,ground);
    circle= Bodies.circle(150,90,70,object_options);
    World.add(world,circle);

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,10,10);
    rect(ground.position.x,ground.position.y,400,10);
    ellipse(circle.position.x,circle.position.y,70);

    
}
