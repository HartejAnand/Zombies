var gameState="play";

var score=0;

var player;

var zombie1,zombie2,zombie3,zombie4,zombie5,zombie6,zombie7,zombie8,zombie9;
var box1,box2,box3,box4,box5,box6;


function setup() {
  createCanvas(windowWidth,windowHeight);

  player=createSprite(windowWidth,windowHeight,windowWidth/20,windowWidth/20);
  player.shapeColor=rgb(255,255,0);
  
  zombie1=createSprite(0,0,windowWidth/20,windowWidth/20);
  zombie1.shapeColor=rgb(0,200,0);
  zombie2=createSprite(windowWidth,0,windowWidth/20,windowWidth/20);
  zombie2.shapeColor=rgb(0,200,0);
  zombie3=createSprite(windowWidth*2,0,windowWidth/20,windowWidth/20);
  zombie3.shapeColor=rgb(0,200,0);
  zombie4=createSprite(windowWidth*3,0,windowWidth/20,windowWidth/20);
  zombie4.shapeColor=rgb(0,200,0);
  zombie5=createSprite(windowWidth*4,0,windowWidth/20,windowWidth/20);
  zombie5.shapeColor=rgb(0,200,0);
  zombie6=createSprite(0,windowHeight*8,windowWidth/20,windowWidth/20);
  zombie6.shapeColor=rgb(0,200,0);
  zombie7=createSprite(windowWidth*2,windowHeight*8,windowWidth/20,windowWidth/20);
  zombie7.shapeColor=rgb(0,200,0);
  zombie8=createSprite(windowWidth*3,windowHeight*8,windowWidth/20,windowWidth/20);
  zombie8.shapeColor=rgb(0,200,0);
  zombie9=createSprite(windowWidth*4,windowHeight*8,windowWidth/20,windowWidth/20);
  zombie9.shapeColor=rgb(0,200,0);
  
  box1=createSprite(random(0,windowWidth*2),random(0,windowHeight*4),windowWidth/20,windowWidth/20);
  box1.shapeColor=rgb(100,50,0);
  box2=createSprite(random(0,windowWidth*2),random(0,windowHeight*4),windowWidth/20,windowWidth/20);
  box2.shapeColor=rgb(100,50,0);
  box3=createSprite(random(0,windowWidth*2),random(0,windowHeight*4),windowWidth/20,windowWidth/20);
  box3.shapeColor=rgb(100,50,0);
  box4=createSprite(random(0,windowWidth*2),random(0,windowHeight*4),windowWidth/20,windowWidth/20);
  box4.shapeColor=rgb(100,50,0);
  box5=createSprite(random(0,windowWidth*2),random(0,windowHeight*4),windowWidth/20,windowWidth/20);
  box5.shapeColor=rgb(100,50,0);
  box6=createSprite(random(0,windowWidth*2),random(0,windowHeight*4),windowWidth/20,windowWidth/20);
  box6.shapeColor=rgb(100,50,0);
  
}

function draw() {
  background(100,100,0);

camera.position.x=player.x;
    camera.position.y=player.y;
    
  if(gameState==="play"){

    

      if(keyDown("up")){
        player.y-=10;
      }
      if(keyDown("down")){
        player.y+=10;
      }
      if(keyDown("left")){
        player.x-=10;
      }
      if(keyDown("right")){
        player.x+=10;
      }

      stroke(150,150,150);
      noFill();
      strokeWeight(5);
      rect(0,0,windowWidth*2,windowHeight*4);

      if(player.x<0){
        player.x+=10;
      }
      if(player.x>windowWidth*2){
        player.x-=10;
      }
      if(player.y<0){
        player.y+=10;
      }
      if(player.y>windowHeight*4){
        player.y-=10;
      }

    if(player.x>zombie1.x){
      zombie1.x+=4;
    }
    if(player.x<zombie1.x){
      zombie1.x-=4;
    }
    if(player.y>zombie1.y){
      zombie1.y+=4;
    }
    if(player.y<zombie1.y){
      zombie1.y-=4;
    }

    if(player.x>zombie2.x){
      zombie2.x+=4;
    }
    if(player.x<zombie2.x){
      zombie2.x-=4;
    }
    if(player.y>zombie2.y){
      zombie2.y+=4;
    }
    if(player.y<zombie2.y){
      zombie2.y-=4;
    }

    if(player.x>zombie3.x){
      zombie3.x+=4;
    }
    if(player.x<zombie3.x){
      zombie3.x-=4;
    }
    if(player.y>zombie3.y){
      zombie3.y+=4;
    }
    if(player.y<zombie3.y){
      zombie3.y-=4;
    }

    if(player.x>zombie4.x){
      zombie4.x+=4;
    }
    if(player.x<zombie4.x){
      zombie4.x-=4;
    }
    if(player.y>zombie4.y){
      zombie4.y+=4;
    }
    if(player.y<zombie4.y){
      zombie4.y-=4;
    }

    if(player.x>zombie5.x){
      zombie5.x+=4;
    }
    if(player.x<zombie5.x){
      zombie5.x-=4;
    }
    if(player.y>zombie5.y){
      zombie5.y+=4;
    }
    if(player.y<zombie5.y){
      zombie5.y-=4;
    }

    if(player.x>zombie6.x){
      zombie6.x+=4;
    }
    if(player.x<zombie6.x){
      zombie6.x-=4;
    }
    if(player.y>zombie6.y){
      zombie6.y+=4;
    }
    if(player.y<zombie6.y){
      zombie6.y-=4;
    }
    
    if(player.x>zombie7.x){
      zombie7.x+=4;
    }
    if(player.x<zombie7.x){
      zombie7.x-=4;
    }
    if(player.y>zombie7.y){
      zombie7.y+=4;
    }
    if(player.y<zombie7.y){
      zombie7.y-=4;
    }

    if(player.x>zombie8.x){
      zombie8.x+=4;
    }
    if(player.x<zombie8.x){
      zombie8.x-=4;
    }
    if(player.y>zombie8.y){
      zombie8.y+=4;
    }
    if(player.y<zombie8.y){
      zombie8.y-=4;
    }

    if(player.x>zombie9.x){
      zombie9.x+=4;
    }
    if(player.x<zombie9.x){
      zombie9.x-=4;
    }
    if(player.y>zombie9.y){
      zombie9.y+=4;
    }
    if(player.y<zombie9.y){
      zombie9.y-=4;
    }

    if(zombie1.isTouching(zombie2,zombie3,zombie4,zombie5,zombie6,zombie7,zombie8,zombie9)){
      zombie1.x=-windowWidth;
      zombie1.y=-windowWidth;
    }
    if(zombie2.isTouching(zombie3,zombie4,zombie5,zombie6,zombie7,zombie8,zombie9)){
      zombie2.x=-windowWidth;
      zombie2.y=-windowWidth;
    }
    if(zombie3.isTouching(zombie4,zombie5,zombie6,zombie7,zombie8,zombie9)){
      zombie3.x=-windowWidth;
      zombie3.y=-windowWidth;
    }
    if(zombie4.isTouching(zombie5,zombie6,zombie7,zombie8,zombie9)){
      zombie4.x=-windowWidth;
      zombie4.y=-windowWidth;
    }
    if(zombie5.isTouching(zombie6,zombie7,zombie8,zombie9)){
      zombie5.x=-windowWidth;
      zombie5.y=-windowWidth;
    }
    if(zombie6.isTouching(zombie7,zombie8,zombie9)){
      zombie6.x=-windowWidth;
      zombie6.y=-windowWidth;
    }
    if(zombie7.isTouching(zombie8,zombie9)){
      zombie7.x=-windowWidth;
      zombie7.y=-windowWidth;
    }
    if(zombie8.isTouching(zombie9)){
      zombie8.x=-windowWidth;
      zombie8.y=-windowWidth;
    }

    if(player.isTouching(zombie1) || player.isTouching(zombie2) || player.isTouching(zombie3) || player.isTouching(zombie4) || player.isTouching(zombie5) || player.isTouching(zombie6) || player.isTouching(zombie7) || player.isTouching(zombie8) || player.isTouching(zombie9)){
      gameState="zombie";
    }

  
  if(player.isTouching(box1)){
    box1.x=random(0,windowWidth*2);
    box1.y=random(0,windowHeight*4);
    score++;
  }

  if(player.isTouching(box2)){
    box2.x=random(0,windowWidth*2);
    box2.y=random(0,windowHeight*4);
    score++;
  }

  if(player.isTouching(box3)){
    box3.x=random(0,windowWidth*2);
    box3.y=random(0,windowHeight*4);
    score++;
  }

  if(player.isTouching(box4)){
    box4.x=random(0,windowWidth*2);
    box4.y=random(0,windowHeight*4);
    score++;
  }

  if(player.isTouching(box5)){
    box5.x=random(0,windowWidth*2);
    box5.y=random(0,windowHeight*4);
    score++;
  }

  if(player.isTouching(box6)){
    box6.x=random(0,windowWidth*2);
    box6.y=random(0,windowHeight*4);
    score++;
  }

  

  drawSprites();
  
  textSize(windowWidth/50);
  fill(255,0,0);
  text("food",box1.x-box1.width/3,box1.y);
  text("food",box2.x-box2.width/3,box2.y);
  text("food",box3.x-box3.width/3,box3.y);
  text("food",box4.x-box4.width/3,box4.y);
  text("food",box5.x-box5.width/3,box5.y);
  text("food",box6.x-box6.width/3,box6.y);

      stroke(0,0,0,240);
      strokeWeight(windowWidth/1.25);
      noFill();
      ellipse(player.x,player.y,windowWidth,windowWidth);
    

  }

  if(gameState==="zombie"){
    player.x=0;
    player.y=0;
    background(0,200,0);
    fill(200,0,200);
    textSize(windowWidth/7);
    text("You became\n  a zombie",0-windowWidth/2.5,0-windowHeight/8);
    textSize(windowWidth/20);
    text("Score: "+score,0-windowWidth/6,0-windowHeight/150);
    player.visible=false;
    zombie1.visible=false;
    zombie2.visible=false;
    zombie3.visible=false;
    zombie4.visible=false;
    zombie5.visible=false;
    zombie6.visible=false;
    zombie7.visible=false;
    zombie8.visible=false;
    zombie9.visible=false;
  }

}
