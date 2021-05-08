var bg, canvas, tom, tomImg1, tomImg2;
var jerry, jerryImg1, jerryImg2;

function preload() {
    bg=loadImage("images/garden.png")

    tomImg1=loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadAnimation("images/cat4.png");

    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  tom=createSprite(870,600);
  tom.addAnimation("tomsleeping", tomImg1);
  tom.scale=0.2;

  jerry=createSprite(200,600);
  jerry.addAnimation("jerrystanding", jerryImg1);
  jerry.scale=0.15;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < (tom.width-jerry.width)/2)
    {
        tom.velocityX=0;
        tom.addAnimation("tomlastimg",tomImg3);
        tom.x=300
        tom.scale=0.2;
        tom.changeAnimation("tomlastimg");
        jerry.addAnimation("jerrylastimg",jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerrylastimg")
    }
    
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay=25;
        jerry.changeAnimation("jerryTeasing");
    }
  


}
