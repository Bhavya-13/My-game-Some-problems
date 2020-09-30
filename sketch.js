// Main player
var player;

//joypad
var up,down;
var shoot;

//weapons
var gun1,gun2,gun3,gun4,bullet1,bullet2,bullet3;

//power ups
var dog,lion,piegon,pizza,bike;

//enimy
var lizard,rat;

//images for all
var lizard_img ,rat_img ,
dog_img ,lion_img ,piegon_img ,pizza_img ,bike_img ,
player_img ,
gun1_img,gun2_img ,gun3_img ,gun4_img ,
bullet1_img ,bullet2_img ,bullet3_img,
up_img,down_img,
shoot_img;

// groups 

var lizard_grp, rat_grp; 

var score;



function preload() {

  player_img=loadImage("Player.png");

  up_img=loadImage("up joypad.jpg");
  down_img=loadImage("down joypad.jpg");

  shoot_img=loadImage("shoot.png");

  lizard_img=loadImage("chipkali.png");
  rat_img=loadImage("chuha.png");

  dog_img=loadImage("kutta.png");
  lion_img=loadImage("sher.png");
  piegon_img=loadImage("piegon.png");
  pizza_img=loadImage("pizza.png");
  bike_img=loadImage("bike.png");

  gun1_img=loadImage("Gun 1.png");
  gun2_img=loadImage("gun2.png");
  gun3_img=loadImage("gun 3.png");
  gun4_img=loadImage("gun 4.png");

  bullet1_img=loadImage("bullet1.png");
  bullet2_img=loadImage("bullet2.png");
  bullet3_img=loadImage("bullet3.png");

}

function setup() {
  createCanvas(800,400);

  lizard_grp = new Group();

  rat_grp = new Group();


  player=createSprite(750,100,10,10);


  gun1=createSprite(720,0,10,10);

  score=0;

}

function draw() {
  background("black"); 


 
  player.velocityY=0;
  player.addImage("a",player_img);
  player.scale=0.3;


  // joypad creation
  up=createSprite(100,315,20,20);
  up.addImage("b",up_img);
  up.scale=0.12;

//
  down=createSprite(100,365,20,20);
  down.addImage("c",down_img);
  down.scale=0.12;

  
//
  shoot=createSprite(700,325,20,20);
  shoot.addImage("d",shoot_img);
  shoot.scale=0.2;


// player movements  
  
  if (mousePressedOver(down)&& player.y<275){
    player.velocityY=4;
   }

   if (mousePressedOver(up)&& player.y>25){
    player.velocityY=-4;
   }





  // gun creation in hand

 gun1.y=player.y;
 gun1.addImage("e",gun1_img);
 gun1.scale=0.2;

 //to control player with gun and shoot







 if (mousePressedOver(shoot)){

bullet1=createSprite(0,0,10,10);
bullet1.addImage("f",bullet1_img);
bullet1.y=gun1.y;
bullet1.x=gun1.x;
bullet1.velocityX=-4;
bullet1.scale=0.2
bullet1.lifeTime=2;

 }


  scoring();
  spawn_enimy();
  drawSprites();
}


function spawn_enimy(){

   if(frameCount % 200 === 0) {
   rat = createSprite(0,0,10,40);
   rat.y=random(24,200);
   rat.velocityX = 4;
   rat.lifeTime=200;
   rat.addImage("f",rat_img);
   rat.scale=0.3;
  
//lifetime not working//

   rat_grp.add(rat);
   //rat_grp.setLifeTimeEach=100

   }

  if(frameCount % 140 === 0) {
    lizard = createSprite(0,0,10,40);
    lizard.y=random(24,200);
    lizard.velocityX = 4;
    lizard.lifeTime=200;
    lizard.addImage("g",lizard_img);
    lizard.scale=0.4;
    
//lifetime not working//

    lizard_grp.add(lizard);
   // lizard_grp.setLifeTimeEach=100

   }

}


function scoring(){

  if (lizard_grp.isTouching(bullet1)){
    lizard_grp.destroyEach();
  }

} 