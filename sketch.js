const Engine =Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var character;
var  bgI;
var e;
var frost,frosti;
var bg;
var engine;
var frostui=[]

function preload(){
bgI = loadImage("snow3.jpg")
e = loadImage("enemy.png")
frosti = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  }
 
function draw() {
  background(bgI)
  
 
 Engine.update(engine);
  
 if(frameCount%5===0){
   frostui.push(frost=new Frost())
 }
 for(var i=0;i<frostui.length;i++){
   frostui[i].display();
 }
 drawSprites(); 
}
