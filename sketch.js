//Declaring of Variables

var home=0;
var instructions=1;
var instructions2=1.5;
var gamestate=home;
var audiobutton;
var mutee;

var Time=0;
var level;
var hit = 0;
var hit2=0;
var count=0;
var MC;
var CM;
var shopstate;

// Intializing the time to be displayed at the end of the game

localStorage["LowestTime"] = 0;

function preload(){

//Loading of Images and animations;  


  airimg=loadImage("air.png");
  arrowimg=loadImage("Marrow.png");
  fireballimg = loadAnimation("ball1.png","ball2.png","ball3.png");
  bigmonsterimg= loadImage("bigmonster.png");
  level1background= loadImage("finalbglevel1.png");
  mute= loadImage("mutefinal.png");
  mute2= loadImage("mutebutton2.png");
  speaker= loadImage("speaker.png");

  monster1img=loadImage("monster11.png");
  monster3img=loadImage("littlemonster.png");
  swordimage= loadImage("sword.png");
  sheildimage= loadImage("sheild.png");
 

  nextlevelimg=loadImage("NEXT2.png");
  pauseimg= loadImage("pause.png");
  resumeimg=loadImage("resume.png")

  seaimg= loadImage("seaimg.png");
  

  sound = loadSound("About_HanuG.mp3");
  chalisa = loadSound("hanuman.mp3")

  tridentimg=loadImage("trident.png");

  gadaimg= loadImage("gadaimg.png");
  finalg2= loadImage("VADA.png");

  hanug= loadImage("hanugg.png");

  instructionB= loadImage("instructionB.png");

  hards= loadImage("Hard.png");
  mediums= loadImage("Medium.png");
  easys= loadImage("Easy.png");

  nextB= loadImage("nextB.png");
  previousB= loadImage("previousB.png");

  mainbackground= loadImage("mainb.png");

  hanumanimg = loadImage ("HANAUMANAN.png");

  audioButton = loadImage ("finalaudiobutton.png");

 seadragon= loadImage("seadragon.png");

 hanuman2=loadImage("hanuman2.png");

 endimg=loadImage("finalimg.jpg");

 sitaimg=loadImage("sitaimg.png");
 
 level3background=loadImage("final mountain.png");

 gameoverimg=loadImage("gameover.png");
 restartimg=loadImage("restart.png");
 hanumansimg=loadImage("Hanumanesha.png");
 gamewinimg=loadImage("youwin.jpg");

 fishomnsterimg=loadImage("monsterfish.png");
 poisonimg=loadImage("fishpoison.png");

 restartimg=loadImage("restart.png");

shopimg=loadImage("store.png");

}


function setup(){

// creation of canvas

  createCanvas(displayWidth,displayHeight);
 
// creating of groups 

  gadagroup = createGroup();
  monstergroup = createGroup();
  bigmonstergroup = createGroup();
  gada2group = createGroup();
  arrowgroup = createGroup();
  monster2group= createGroup();
  fireballgroup= createGroup();
  airgroup =createGroup();
 
  tridentgroup = createGroup();
  monster3group=createGroup();
  sheildgroup = createGroup();
  swordgroup = createGroup();

  fishmonstergroup= createGroup();
  poisongroup = createGroup();
 
// creating of sprites 

  templeimage=createSprite(800,470,windowWidth,windowHeight);
  templeimage.addImage(mainbackground);
  templeimage.scale=0.8;
 
  wall=createSprite(1800,500,600,5000);
  wall.shapeColor="black";
  wall.visible=false;
  
  wall2=createSprite(-80,500,600,5000);
  wall2.shapeColor="yellow";
  wall2.visible=false;
  

  jungle=createSprite(width/30,height/2,178,10);
  jungle.addImage(level1background);
  jungle.scale=4;
  jungle.velocityX=-10;
  jungle.visible=false;
  
 menu=createSprite(330,600,0,0);
 menu.addImage(instructionB);
 menu.setCollider("rectangle",0,70,220,50);
 menu.scale=1;
 
 backbutton=createSprite(40,30,0,0);
 backbutton.addImage(previousB);
 backbutton.scale=0.3;
 
 audiobutton=createSprite(1100,100);
 audiobutton.addImage(audioButton);
 audiobutton.scale=0.2;
 //audiobutton.debug=true;
 audiobutton.setCollider("circle",10,-20,255);
 audiobutton.visible=false;
 
 mutee=createSprite(11000,300);
 mutee.addImage(mute);
 mutee.scale=0.4;
 mutee.setCollider("circle",-260,-100,115);
 mutee.visible=false;
 //mutee.debug=true;
 
 finalg1=createSprite(420,150,0,0);
 finalg1.addImage(finalg2);
 finalg1.scale=0.3;
 finalg1.visible=false;

 sea= createSprite(width/2,height/2,10,10);
 sea.addImage(seaimg)
 sea.scale=2;
 sea.velocityX=-5;
 sea.visible=false;
 
  sita=createSprite(width/2,height/2);
  sita.addImage(sitaimg);
  sita.scale=3;

 nextlevel=createSprite(6000,800,0,0);
 nextlevel.addImage(nextlevelimg);
 nextlevel.scale=0.5;
 nextlevel.visible=false;

 nextlevel2=createSprite(6000,800,0,0);
 nextlevel2.addImage(nextlevelimg);
 nextlevel2.scale=0.5;
 nextlevel2.visible=false;

 nextlevel3=createSprite(6000,800,0,0);
 nextlevel3.addImage(nextlevelimg);
 nextlevel3.scale=0.5;
 nextlevel3.visible=false;

 mountain=createSprite(width/2,height/2,10,10);
 mountain.addImage(level3background);
 mountain.visible=false;
 mountain.velocityX=-5;
 mountain.scale=3.5;

 ramlaxman=createSprite(width/2,height/2,10,10);
 ramlaxman.addImage(endimg);
 ramlaxman.visible=false;

 invisible=createSprite(60000,700,400000,105);
 invisible.visible=false;

 invisible2=createSprite(0,700,20,45000);
 invisible2.visible=false;

hanug2=createSprite(400,70,0,0);
hanug2.addImage(hanug);
hanug2.scale=0.6;
hanug2.visible=false;

 gameover=createSprite(width/2,height/2+100);
 gameover.addImage(gameoverimg);
 gameover.visible=false;

 gamewin=createSprite(width/1,height/200);
 gamewin.addImage(gamewinimg);
 gamewin.scale=0.1;
 gamewin.visible=false;

 restart=createSprite(width/2,height/2);
 restart.addImage(restartimg);
 restart.visible=false;
 restart.scale=0.6;

 nextbutton=createSprite(350,360,0,0);
 nextbutton.addImage(nextB);
 nextbutton.scale=0.2;
 
 hanuman=createSprite(width/8,height/2,20,20);
 hanuman.addImage(hanumanimg);
 hanuman.scale=0.4;
 hanuman.setCollider("rectangle",0,40,800,350);
 //hanuman.debug=true;

 pause=createSprite(50,height-50);
 pause.addImage(pauseimg);
 pause.scale=0.6;
 pause.visible=false;
 
 resume=createSprite(70,80);
 resume.addImage(resumeimg);
 resume.scale=0.4;
 resume.visible=false;
 //resume.debug=true;

 mutee2=createSprite(800,800);
 mutee2.addImage(mute2);
 mutee2.scale=0.4;
 mutee2.visible=false;

 speaker1=createSprite(6000,800);
 speaker1.addImage(speaker);
 speaker1.scale=0.2;
 speaker1.visible=false;

  hardb= createSprite(1100,340,0,0);
   hardb. addImage(hards);
    hardb.scale=0.7;
    //hardb.debug=true;
   hardb.setCollider("rectangle",30,-10,320,90);
   hardb.visible=false;

   mediumb= createSprite(1100,440,0,0); 
   mediumb. addImage(mediums);
   mediumb.scale=0.7;
   mediumb.setCollider("rectangle",20,-20,350,90);
   //mediumb.debug=true; 
   mediumb.visible=false;

   easyb= createSprite(1100,540,0,0);
   easyb. addImage(easys);
   easyb.scale=0.7;
   easyb.setCollider("rectangle",30,-20,350,90);
   //easyb.debug=true;
   easyb.visible=false;

}

 function draw(){
  background("white");
  console.log(MC);

  //creating of edges

  edges=createEdgeSprites();
  
// colliding hanuman with the walls

  hanuman.collide(edges[2]);
  hanuman.collide(edges[3]);
  hanuman.collide(edges[1]);
  hanuman.collide(invisible);
  hanuman.collide(invisible2);

// bouncing off monsters from the up and down walls

  monstergroup.bounceOff(edges[2]);
  monstergroup.bounceOff(edges[3]);
  monstergroup.bounceOff(invisible);

  monster3group.bounceOff(edges[2]);
  monster3group.bounceOff(edges[3]);

  //home page starts 
 if(gamestate==home) {

  //setting some of the sprites visibility to true

      templeimage.visible=true;
      menu.visible=true;
      audiobutton.visible=true;
      hanug2.visible=true;
      finalg1.visible=true;
      mutee.visible=true;
      wall.visible=true;
      hardb.visible=true;
      mediumb.visible=true;
      easyb.visible=true;
     
      
      // destroying spritegroups
   // monster2group.destroyEach();
    /*fishmonstergroup.destroyEach();
    poisongroup.destroyEach();
    monster2group.destroyEach();
    monster3group.destroyEach();
    monstergroup.destroyEach();
    tridentgroup.destroyEach();
    gadagroup.destroyEach();
    airgroup.destroyEach();
      */


   // number of hits needed for killing big monster
     // hit=0;
    //hit2=0;

    // setting some of the sprites visibility to false
      wall2.visible=false;
      jungle.visible=false;
      hanuman.visible=false;
      nextlevel.visible=false;
      nextlevel2.visible=false;
      nextlevel3.visible=false;
     
      pause.visible=false;
      resume.visible=false;
      ramlaxman.visible=false;
      restart.visible=false;
      gameover.visible=false;
      sita.visible=false;
      sea.visible=false;
      jungle.visible=false;
      mountain.visible=false;
      gamewin.visible=false;

      backbutton.visible=false;
      nextbutton.visible=false;
         
// checking the difficulty

      if(mousePressedOver(easyb)) {
        MC='E';
        gamestate="level1";
        chalisa.play();
    
      }
      if(mousePressedOver(mediumb)) {
        MC='M';
        gamestate="level1";
        chalisa.play();
      }

      if(mousePressedOver(hardb)) {
        MC='H';
        gamestate="level1";
        chalisa.play();
      
      }
      
// going to instructions page

      if(mousePressedOver(menu)) {
        gamestate=instructions;
      }

      // turning on and of the audiobutton
      if(mousePressedOver(audiobutton)) {
        sound.play();
        audiobutton.visible=false;
        audiobutton.x=6000;
        mutee.visible=true;
        mutee.x=1400;
        mutee.y=150;
      }
      if(mousePressedOver(mutee)) {
         sound.stop();
         mutee.visible=false;
         mutee.x=60000;
         audiobutton.visible=true;
         audiobutton.x=1100;
    }

      drawSprites();

  }

  if(gamestate == instructions ) {
    background("blue");
    
    gamewin.visible=false;
    pause.visible=false;
    resume.visible=false;
    hanuman.visible=false;
    menu.visible=false;
    templeimage.visible=false;
    backbutton.visible=true;
    audiobutton.visible=false;
    nextbutton.visible=false;
    nextlevel.visible=false;
    nextlevel2.visible=false;
    nextlevel3.visible=false;
  //  bigmonstergroup.setVisibleEach(false);
    mutee.visible=false;
    hanug2.visible=false;
    finalg1.visible=false;
    mutee.visible=false;
    wall.visible=false;
    hardb.visible=false;
    mediumb.visible=false;
    easyb.visible=false;
   // vajra.visible=false;

  /*  fishmonstergroup.destroyEach();
    poisongroup.destroyEach();
    monster2group.destroyEach();
    monster3group.destroyEach();
    monstergroup.destroyEach();
    tridentgroup.destroyEach();
    gadagroup.destroyEach();
    airgroup.destroyEach(); */
    
    fill("white");
    textSize(40);
    text("                            RULES TO PLAY",width/5,50);
    textSize(20);
    text("LEVEL 1: MONSTER WAR LEVEL ",width/5,100);
    text("-Kill the small and big monsters. ",width/5,150);
    text("-Move up and down by pressing up and down arrows.",width/5,200);
    text("-Press A key to throw Gada.",width/5,250);
    text("LEVEL 2: SITA MATA LEVEL",width/5,350);
    text("-Move Up  and Down, Left and Right by pressing up,down,left and right key only in this level.",width/5,400);
    text("-Kill the dragon Monster and also save your self from poisonous fish monsters.",width/5,450);
    text("-Press A key to shoot trident and Space key to shoot air to blow the fireballs.",width/5,500);
    text("LEVEL 3: SANJEEVANI LEVEL",width/5,600);
    text("-Take the sanjeevani Mountain to Lord Ram for Saving Lakshman.",width/5,650);
    text("-Kill eagle monsters in this level.",width/5,700);
    text("-Press A to shoot Gada and Space to shoot Shields .",width/5,750);
    text("******FINISH GAME IN LESS TIME TO BE THE WINNER AND BEAT OTHER PLAYERS******",width/5,800);
    drawSprites();
    
  }

if(mousePressedOver(backbutton) ) {
  gamestate=home;
  backbutton.visible=false;
  nextbutton.visible=false;
  console.log(gamestate);

}

// beginning of level with chosen difficulty

if(gamestate === "level1") {
   
  // muting of audiobutton sound if game starts
  sound.stop();
    Time=Time+Math.round(getFrameRate()/60);
  
 
    jungle.visible=true;
    hanuman.visible=true;
    mutee2.visible=true;

  menu.visible=false;
  templeimage.visible=false;
  audiobutton.visible=false;
  mutee.visible=false;
  hanug2.visible=false;
  finalg1.visible=false;
  mutee.visible=false;
  wall.visible=false;
  hardb.visible=false;
  mediumb.visible=false;
  easyb.visible=false;
 // vajra.visible=false;

  hanuman.addImage(hanumanimg);
 
  //playbutton.visible=false;
  pause.visible=true;
  resume.visible=false;
 
 //reset the background
 if(jungle.x<-1000) {
   jungle.x=jungle.width/-5;  
 }
 
// moving of hanuman ji 

 if(keyDown("up")) {
   hanuman.y=hanuman.y-10;
 }

 if(keyDown("down")) {
   hanuman.y=hanuman.y+10;
 }

 
 spawncyclops();

 
 if(keyDown("a") ) {
   spawngada();
   
 }

// killing the monsters/gada

 if(monstergroup.isTouching(gadagroup)) {
     gadagroup.destroyEach();
     monstergroup.destroyEach();
     
 }
 
 // going to gamestate end1

  if(monstergroup.isTouching(hanuman)){
   gamestate="end1";
   chalisa.stop();

   console.log("level1,monster")
 }
 
// destroying Hanuman if touching arrow and taking  it to gamestate end1

 if(arrowgroup.isTouching(hanuman)){
   arrowgroup.setVelocityXEach(0);
   gamestate="end1";
   chalisa.stop();
 
   console.log("level1,arrow")
 }
 
// destroying the arrow and gada if touching each other

 if(gadagroup.isTouching(arrowgroup)){
   arrowgroup.destroyEach();
   gadagroup.destroyEach();
 }

// giving the bigmonster entry time

 if(Time >= 100 && World.frameCount % 100 == 0){
  
  spawnbigmonster();
  console.log(World.frameCount);
  
  if(bigmonstergroup.isTouching(hanuman)){
    gamestate="end1";
    level="first";
    console.log(level);
  }
}

// if gada is colliding with big monster 12 times then big monster will die

if(gadagroup.collide(bigmonstergroup)){
  hit++;
 }

 if(hit === 12){
   bigmonstergroup.destroyEach();
   arrowgroup.setVelocityXEach(0);
   arrowgroup.destroyEach()
   nextlevel.visible=true;
   nextlevel.x=1400;
   nextlevel.y=500;
   monstergroup.setVelocityXEach(0);
   monstergroup.destroyEach();
   gadagroup.destroyEach();
   Time=Time;
 }
 
 drawSprites();
 
 fill("white");
 textSize(30);
 text("Time:" + Time,width/6,30);

 fill("red");
 textSize(30);
 text("Monster War",width/2-100,30);

 // pausing the game
 if(mousePressedOver(pause)){
  gamestate="pause";
  level="first";
  resume.visible=true;
}

// muting the chalisa
if(mousePressedOver(mutee2)){
  chalisa.stop();
  speaker1.x=800;
  speaker1.visible=true;
  mutee2.x=6000;
}

// resume to play chalisa 
if(mousePressedOver(speaker1)){
  chalisa.play();
  speaker1.x=6000;
  mutee2.x=800;
}

// next level begins
 if(mousePressedOver(nextlevel)){
   gamestate="level2";
   sea.velocityX=-5;
   console.log(MC);
 }

}

if(gamestate=="level2"){

  Time=Time+Math.round(getFrameRate()/60);

  sea.visible=true; 
  hanuman.visible=true;
  nextlevel.visible=false;
  pause.visible=true;
  resume.visible=false;
  nextbutton.visible=false;
  sita.visible=false;
  wall.x=1400;
  hanuman.collide(wall);

  // moving sea
  if(sea.x<0){
    sea.x=200;
  }
  
  // moving hanuman in all four directions
   if(keyDown("up")) {
      hanuman.y=hanuman.y-10;
    }

    if(keyDown("down")) {
      hanuman.y=hanuman.y+10;
    }

    if(keyDown("left")) {
      hanuman.x=hanuman.x-30;
    }

    if(keyDown("right")) {
      hanuman.x=hanuman.x+30;
    }

    if(Time > 2800){
      spawnseamonster();
    } spawnfishmonster();
  
  if(keyDown("a")){
    spawntrident()
  }

  if(keyDown("space")){
    spawnair();
  }
  

 // if(tridentgroup.isTouching(monster2group)){
 //   gamestate="level2.1";
    
 // }

  if(tridentgroup.collide(monster2group)){
    hit2++;
 
    if(hit2 == 15){
      airgroup.destroyEach();
      gamestate="level2.1"
    }
  }  

  if(tridentgroup.isTouching(fishmonstergroup)){
    
    fishmonstergroup.destroyEach();
    poisongroup.destroyEach();
  }
  

  if(monster2group.isTouching(hanuman)){
   
    gamestate="end2";
    level="second";
    console.log("end,sea");
  }

  if(fishmonstergroup.isTouching(hanuman) || hanuman.isTouching(fireballgroup)){
   
    gamestate="end2";
    level="second";
    console.log("end,fishmonster");
  }

  if(airgroup.isTouching(fireballgroup)){
    fireballgroup.destroyEach();
    airgroup.destroyEach();
  }

  if(poisongroup.isTouching(hanuman)){
   
    gamestate="end2";
    level="second";
    console.log("end,sea");
  }

  //if(localStorage["LowestTime"]<Time){
    //localStorage["LowestTime"] = Time;
  //}

  drawSprites();

  fill("Green");
 textSize(20);
 text("Time:" + Time,width/6,30);
 //text("Previous Time: " + localStorage["LowestTime"],500,50);

 
 fill("red");
 textSize(30);
 text("Sita Mata",width/2-100,30);

 if(mousePressedOver(pause)){
   gamestate="pause";
   level="second";
   resume.visible=true;
 }

 if(mousePressedOver(mutee2)){
  chalisa.stop();
  speaker1.x=800;
  speaker1.visible=true;
  mutee2.x=6000;
}

if(mousePressedOver(speaker1)){
  chalisa.play();
  speaker1.x=6000;
  mutee2.x=800;
}

}


if(gamestate== "level2.1"){

  Time=Time//+Math.round(getFrameRate()/60);

  monster2group.destroyEach();
  monster2group.setVisibleEach=false;
  sea.visible=true;
  sita.visible=false;  
  sea.velocityX=0;
  hanuman.addImage(hanuman2);
  hanuman.scale=2;
  hanuman.x=width/4;
  hanuman.y=height/2;
  monster2group.x=6000
  tridentgroup.setVelocityXEach(0);
  fishmonstergroup.destroyEach();
  monster2group.destroyEach();
  poisongroup.destroyEach()
  fireballgroup.destroyEach();
  tridentgroup.destroyEach();

  nextlevel2.x=1500;
  nextlevel2.y=500;
  nextlevel2.scale=0.3;
  nextlevel2.visible=true;

  nextbutton.visible=false;

  pause.visible=false;
  resume.visible=false;
  wall2.visible=true;
  

  if(mousePressedOver(nextlevel2) ){
    gamestate="level2.2"; 
 
  }

  if(mousePressedOver(pause)){
    gamestate="pause";
    level="second";
  }
 
 
  drawSprites();
 
  fill("white");
 textSize(20);
 text("Time:" + Time,width/6,30);


}

// Going to level3

if(gamestate== "level2.2"){

Time=Time//+Math.round(getFrameRate()/60);
  console.log(gamestate);
  sea.visible=false;
  sea.velocityX=0;
  hanuman.visible=false;
  sita.visible=true;
  sita.x=width/2+50;
  sita.y=height/2;
  sita.scale=2.5;
  monster2group.setVelocityXEach(0);
  monster2group.destroyEach();
  tridentgroup.setVelocityXEach(0);
  tridentgroup.destroyEach();

  fishmonstergroup.destroyEach();

  nextlevel3.x=1500;
  nextlevel3.y=500;
  nextlevel3.scale=0.3;

  nextlevel.visible=false;
  nextlevel2.visible=false;
  nextlevel3.visible=true;

  pause.visible=false;
  resume.visible=false;


 if(mousePressedOver(nextlevel3)){
   gamestate="level3";
 }

  drawSprites();


}

// Level 3 begans
if(gamestate=="level3"){

 Time=Time+Math.round(getFrameRate()/60);
 sita.visible=false;
 mountain.scale=2.5;
 mountain.visible=true;
 hanuman.visible=true;
 hanuman.addImage(hanumansimg);
 hanuman.scale=0.5;
 hanuman.x=width/8;
 hanug2.visible=false;
 nextbutton.visible=false;
 mutee2.visible=true;
 wall2.visible=false;
 //monster2

 fishmonstergroup.destroyEach();
 fireballgroup.destroyEach();
 monster2group.destroyEach();
 monster2group.setVisibleEach=false;

 //hanuman.debug=true;
 hanuman.setCollider("rectangle",0,0,50,100);

 pause.visible=true;
 resume.visible=false;

 if(keyDown(UP_ARROW)){
   hanuman.y=hanuman.y-10;
 }

 if(keyDown(DOWN_ARROW)){
   hanuman.y=hanuman.y+10;
 }



 if(mountain.x < 0){
   mountain.x=200;
 }

 if(sheildgroup.isTouching(swordgroup)){
  sheildgroup.destroyEach();
  swordgroup.destroyEach();
}
// spawning jungle monster
 spawnjunglemonster()
 count++;


 if(keyDown("a")){
  spawngada();
 }
 if(keyDown("space")){
   spawnsheild();
 }
 
// Going to gamestate end in level 3 if hanuman is touching monster3 or sword
  if(hanuman.isTouching(monster3group) || hanuman.isTouching(swordgroup)){
    gamestate="end3";
    monster3group.setVisibleEach(true);
  }

 /* if(gadagroup.isTouching(monster3group) ){
   
    monster3group.destroyEach();
    gadagroup.destroyEach();
  }
  */

  
  // Going to gamestate 3.1
  if(Time> 4000 && gadagroup.isTouching(monster3group)){
    gamestate="level3.1"
    monster3group.destroyEach();
    gadagroup.destroyEach();
    console.log(gamestate)
  }

  if(gadagroup.isTouching(monster3group)){
    monster3group.destroyEach();
    gadagroup.destroyEach();
  }

  // Destroying gada and sword if touching each other
  if(gadagroup.isTouching(swordgroup)){
    gadagroup.destroyEach();
    swordgroup.destroyEach();
  }

 
  // Pausing the game in level 3
  if(mousePressedOver(pause)){
    gamestate="pause";
    level="third";
    resume.visible=true;
  }

  // making the eagle monsters invisible
  if(count % 10 ==0){
    monster3group.setVisibleEach(true);
    console.log("visible")
  }
  else{
    monster3group.setVisibleEach(false);
    console.log(" not visible")
  }

  // muting the chalisa 
  if(mousePressedOver(mutee2)){
    chalisa.stop();
    speaker1.x=800;
    speaker1.visible=true;
    mutee2.x=6000;
  }
  

  // playing the chalisa
  if(mousePressedOver(xspeaker1)){
    chalisa.play();
    speaker1.x=6000;
    mutee2.x=800;
  }

  //if(localStorage["LowestTime"]<Time){
    //localStorage["LowestTime"] = Time;
  //}

 drawSprites(); 

 fill("white");
 textSize(20);
 text("Time:" + Time,width/6,30);
 //text("Previous Time: " + localStorage["LowestTime"],500,50);

 
 fill("red");
 textSize(30);
 text("SANJEEVANI HUNT",width/2-100,30);

}

// Winning state
if(gamestate == "level3.1"){

  hanuman.visible=false;

  ramlaxman.visible=true;
  ramlaxman.scale=3;

  wall2.visible=true;
  wall2.shapeColor="yellow";
  mountain.visible=false;
  swordgroup.destroyEach();
  monster3group.destroyEach();
  gamewin.scale=0.5;
  gamewin.x=400
  gamewin.y=250;
  wall.visible=true;
  wall.shapeColor="yellow";
  gamewin.visible=true;
  gameover.visible=false;
  mutee2.visible=false;
  nextlevel3.visible=false;
  nextlevel2.visible=false;
  nextlevel.visible=false;

  pause.visible=false;
  resume.visible=false;

  monster2group.destroyEach();
  

  restart.visible=true;
  restart.x=width/2;
  restart.y=height/2+100;
  restart.scale=0.5;

  if(localStorage["LowestTime"]<Time){
    localStorage["LowestTime"] = Time;
  }

  if(mousePressedOver(restart)){
    gamestate=home;
    hanuman.scale=0.4;
    Time=0;
    chalisa.stop();
    audiobutton.visible=true;
    audiobutton.x=1100;
    hanuman.x=width/8;
  }
  drawSprites();

 fill("white");
 textSize(30);
 //text("Time:" + Time,width/6,30);
 text("Previous Time: " + localStorage["LowestTime"],500,50);

// text("Lowest Time:" + Time,100,30);
}

if(localStorage["LowestTime"]<Time){
  localStorage["LowestTime"] = Time;
}

// pausing the game
if(gamestate=="pause"){
    
  if(level=="first"){
    jungle.visible=true;
    bigmonstergroup.setVelocityXEach(0);
    gadagroup.setVelocityXEach(0);
    monstergroup.setVelocityXEach(0);
    monstergroup.setVelocityYEach(0);
    hanuman.visible=true;
    jungle.velocityX=0;
    arrowgroup.setVelocityXEach(0);
    mutee2.visible=true;
  }

//    starting second level
  if(level=="second"){
    sea.velocityX=0;
    monster2group.setVelocityXEach(0);
    fireballgroup.setVelocityXEach(0);
   // fireballgroup.pause();
    tridentgroup.setVelocityXEach(0);
    airgroup.setVelocityXEach(0);
    hanuman.visible=true;
    fishmonstergroup.setVelocityXEach(0);
    poisongroup.setVelocityYEach(0);
  }

  // starting third level
  if(level == "third"){
    hanuman.visible=true;
    mountain.velocityX=0;
    gadagroup.setVelocityXEach(0);
    swordgroup.setVelocityXEach(0);
    sheildgroup.setVelocityXEach(0);
    monster3group.setVelocityXEach(0);
  }

  drawSprites();
}

// Resuming the game if paused
if(mousePressedOver(resume) && gamestate=="pause"){
  
  if(level=="first"){
    monstergroup.destroyEach();
    gadagroup.destroyEach();
    arrowgroup.destroyEach();
    bigmonstergroup.destroyEach();
    jungle.velocityX=-7;
    gamestate="level1";
    mutee.visible=false;
    audiobutton.visible=false;
    
    console.log("resume1");
  }
  
  if(level=="second"){
    fishmonstergroup.destroyEach();
    poisongroup.destroyEach();
    fireballgroup.destroyEach();
    fireballgroup.visible=false;
    fireballgroup.setVelocityXEach=0;
    airgroup.destroyEach();
    tridentgroup.destroyEach();
    monster2group.destroyEach();
    sea.velocityX=-5;
    gamestate="level2";
    mutee.visible=false;
    audiobutton.visible=false;
    console.log("resume2");
  }

  if(level == "third"){
    monster3group.destroyEach();
    gadagroup.destroyEach();
    swordgroup.destroyEach();
    sheildgroup.destroyEach();
    mountain.velocityX=-5;
    gamestate="level3";
    mutee.visible=false;
    audiobutton.visible=false;

    console.log("resume3");
  }

}

// Being defeated in level 1
if(gamestate == "end1" ){
    
  sound.stop();
  chalisa.stop();
    jungle.visible=true;
    hanuman.visible=false;
    jungle.velocityX=0;
    bigmonstergroup.velocityY=0;
    //monstergroup.setVelocityXEach(0);
    //monstergroup.setVelocityYEach(0);
    arrowgroup.destroyEach();
    monstergroup.destroyEach();
    gadagroup.destroyEach();
    gameover.visible=true;
    bigmonstergroup.destroyEach();

    pause.visible=false;
    resume.visible=false;
    mutee2.visible=false

    restart.visible=true;

    //if(localStorage["LowestTime"]>Time){
      //localStorage["LowestTime"] = Time;
    //}

    //fill("white");
    //textSize(20);
    //text("Lowest Time: " + localStorage["LowestTime"],500,100);

    // Restarting game if defeated
    if(mousePressedOver(restart)){
      jungle.velocityX=-8;
      gamestate=home;
      Time=0;
      audiobutton.visible=true;
      audiobutton.x=1100;
      mutee.visible=false;
      speaker1.visible=false;
      mutee2.visible=false;
      sound.stop();
      chalisa.stop();
      hanuman.x=width/8;
     //fill("white");
      //textSize(20);
     // text("Lowest Time: " + localStorage["LowestTime"],500,100);
    }

    drawSprites();
    
    //fill("white");
    //textSize(20);
    //text("Time:" + Time,width/6,30);
    //text("Previous Time: " + localStorage["LowestTime"],500,50);
}

// Being defeated in level 2
if(gamestate == "end2"){
  sea.velocityX=0;
  monster2group.setVelocityXEach(0);
  gameover.visible=true;
  hanuman.visible=false;
  fishmonstergroup.setVelocityXEach(0);
  poisongroup.setVelocityYEach(0);
  tridentgroup.setVelocityXEach(0);
  chalisa.stop();
  monster2group.destroyEach();
  fishmonstergroup.destroyEach();
  tridentgroup.destroyEach();
  airgroup.destroyEach();
  fireballgroup.destroyEach();
  chalisa.stop();
  pause.visible=false;
  resume.visible=false;
  mutee2.visible=false;

  restart.visible=true;

  //if(localStorage["LowestTime"]>Time){
    //localStorage["LowestTime"] = Time;
  //}

  //fill("white");
  //textSize(20);
  //text("Lowest Time: " + localStorage["LowestTime"],500,100);

  // Restarting game in level2
  if(mousePressedOver(restart)){
    /*gamestate=home;
    sound.stop();
    chalisa.stop();
    sea.velocityX=0;
    //gamestate=home;
    Time=0;
     audiobutton.visible=true;
     audiobutton.x=wdth/1.5;
     mutee2.visible=false;*/
     reset();
  }

  drawSprites();

  fill("white");
 // textSize(20);
  //text("Time:" + Time,width/6,30);
  //text("Previous Time: " + localStorage["LowestTime"],500,50);
 }
 // Being defeated in level 3
 if(gamestate=="end3"){
   mountain.velocityX=0;
   monster3group.setVelocityXEach(0);
   gadagroup.destroyEach();
   gameover.y=height-100;
   gameover.visible=true;
   sound.stop();
   chalisa.stop();
   monster2group.visible=false;
   fireballgroup.destroyEach();
   
   
   pause.visible=false;
   resume.visible=false;
   mutee2.visible=false;
   restart.visible=true;

   //if(localStorage["LowestTime"]<Time){
   // localStorage["LowestTime"] = Time;
  //}

  //fill("white");
  //textSize(20);
  //text("Lowest Time: " + localStorage["LowestTime"],500,100);

// Restarting in level 3
  if(mousePressedOver(restart)){
    mountain.velocityX=-8;
    gamestate=home;
    Time=0;
    hanuman.addImage(hanumanimg)
    audiobutton.x=1100;
    mutee2.visible=false;
    chalisa.stop();
    sound.stop();
  //  hanuman.x=width/1.5; 
    hanuman.x=width/8;
    //fill("white");
    //textSize(20);
   // text("Lowest Time: " + localStorage["LowestTime"],500,100);
  }

   drawSprites();

   //fill("white");
   //textSize(20);
   //text("Time:" + Time,width/6,30);
   //text("Previous Time: " + localStorage["LowestTime"],500,50);
 }

 /*if(gamestate == shopstate){
  background("blue");
 // vajra.visible=true;

  gamewin.visible=false;
  pause.visible=false;
  resume.visible=false;
  //playbutton.visible=false;
  hanuman.visible=false;
  menu.visible=false;
  templeimage.visible=false;
  backbutton.visible=true;
  audiobutton.visible=false;
  nextbutton.visible=false;
  nextlevel.visible=false;
  nextlevel2.visible=false;
  nextlevel3.visible=false;
  bigmonstergroup.setVisibleEach(false);
  mutee.visible=false;
  hanug2.visible=false;
  finalg1.visible=false;
  mutee.visible=false;
  wall.visible=false;
  hardb.visible=false;
  mediumb.visible=false;
  easyb.visible=false;
 // var kulu=createSprite(200,200,500,500);
}*/


 }
//function draw ends here

// Spawning bigmonster of level1
function spawnbigmonster(){
  bigmonster= createSprite(width/1.5,height/2,30,30);
  bigmonster.addImage(bigmonsterimg);
  //bigmonster.visible=false;
  if(MC=='E'){
  bigmonster.velocityY=random(2,5);
  }
  if(MC=='M'){
    bigmonster.velocityY=random(2,10);
  }
  if(MC=='H'){
    bigmonster.velocityY=random(2,15);
  }
  bigmonster.scale=2.1;
  bigmonster.lifetime=250;
  bigmonstergroup.add(bigmonster);
  bigmonstergroup.bounceOff(edges[2]);
  bigmonstergroup.bounceOff(edges[3]);
  console.log("big monster coming");
}

// Spawning cyclops in level1
function spawncyclops() {
  if (MC=='E'){
    if(World.frameCount%180==0) {
      var cyclops=createSprite(1300,random(150,500),0,0);
      cyclops.addImage(monster1img);
      cyclops.scale=0.7;
      cyclops.velocityX=-3;
      cyclops.velocityY=-3;
      // cyclops.debug=true;
      cyclops.setCollider("circle",0,0,120);
      
      cyclops.depth=hanuman.depth;
    // cyclops.depth=restart.depth;
      hanuman.depth+=1;
      

     // creating arrows 
      var arrow=createSprite(1000,cyclops.y);
      arrow.addImage(arrowimg);
      arrow.scale=0.4;
      arrow.velocityX=-5;
      //arrow.debug=true;
      arrow.setCollider("rectangle",0,0, 70,50);
      arrowgroup.add(arrow);
      arrowgroup.setLifetimeEach(200);
      monstergroup.add(cyclops);
      monstergroup.setLifetimeEach(200);
    }
  }

  // Giving levels
  if (MC=='M'){
    if(World.frameCount%140==0) {
      var cyclops=createSprite(1300,random(150,500),0,0);
      cyclops.addImage(monster1img);
      cyclops.scale=0.7;
      cyclops.velocityX=-9;
      cyclops.velocityY=-9;
      // cyclops.debug=true;
      cyclops.setCollider("circle",0,0,120);
      
      cyclops.depth=hanuman.depth;
    // cyclops.depth=restart.depth;
      hanuman.depth+=1;
      
      var arrow=createSprite(1000,cyclops.y);
      arrow.addImage(arrowimg);
      arrow.scale=0.4;
      arrow.velocityX=-13;
      //arrow.debug=true;
      arrow.setCollider("rectangle",0,0, 70,50);
      arrowgroup.add(arrow);
      arrowgroup.setLifetimeEach(200);
      monstergroup.add(cyclops);
      monstergroup.setLifetimeEach(200);
    }
  }
  if (MC=='H'){
    if(World.frameCount%90==0) {
      var cyclops=createSprite(1300,random(150,500),0,0);
      cyclops.addImage(monster1img);
      cyclops.scale=0.7;
      cyclops.velocityX=-14;
      cyclops.velocityY=-14;
      // cyclops.debug=true;
      cyclops.setCollider("circle",0,0,120);
      
      cyclops.depth=hanuman.depth;
    // cyclops.depth=restart.depth;
      hanuman.depth+=1;
      
      var arrow=createSprite(1000,cyclops.y);
      arrow.addImage(arrowimg);
      arrow.scale=0.4;
      arrow.velocityX=-20;
      //arrow.debug=true;
      arrow.setCollider("rectangle",0,0, 70,50);
      arrowgroup.add(arrow);
      arrowgroup.setLifetimeEach(200);
      monstergroup.add(cyclops);
      monstergroup.setLifetimeEach(200);
    }
  }
}

// Spawning gada for Hanuman
function spawngada() {
  var gada=createSprite(hanuman.x,hanuman.y,0,0);
  gada.addImage(gadaimg);
  gada.scale=0.5;
  if(MC=='E'){
    gada.velocityX=5;
  }

  if(MC=='M'){
    gada.velocityX=6;
  }

  if(MC=='H'){
    gada.velocityX=9;
  }
  gada.lifetime=550;
 // gada.debug=true;
  gada.setCollider("rectangle",0,0,gada.width/4,gada.height);
  gadagroup.add(gada);

}

// Spawning dragon sea monster of level2
function spawnseamonster(){
if(World.frameCount%200==0) {
   var monster2=createSprite(1300,height-200,0,0);
   monster2.addImage(seadragon);
   monster2.scale=0.25;
  // monster2.setLifetime=100;
  // monster2.velocityX=-5;
  // monster2.debug=true;
   monster2.setCollider("rectangle",100,0,200,1200);

   hanuman.depth=monster2.depth;

   monster2.depth=gameover.depth;
   gameover.depth=monster2.depth;

   // Spawning fireballs for dragon monster of level 2
   //if(World.frameCount%200==0) {
   var fireball= createSprite(monster2.x-100,monster2.y,10,10);
   fireball.addAnimation("fireballanime",fireballimg);
   fireball.scale=0.2;
   if(MC=='E'){
   fireball.velocityX=-5;
   fireball.velocityY=random(-1,-7);
   }
   if(MC=='M'){
    fireball.velocityX=-10;
    fireball.velocityY=random(-6,-14);
   }
   if(MC=='H'){
    fireball.velocityX=-15;
    fireball.velocityY=random(-9,-20);
   }
   
   fireballgroup.add(fireball);
   fireballgroup.setLifetimeEach(200);

   monster2group.add(monster2);
   monster2group.setLifetimeEach(200);
    
   }
  
}

// spawning fish monster
function spawnfishmonster(){
  if(World.frameCount % 180 ==0){
    var fishmonster= createSprite(random(200,800),height-100,10,10);
    fishmonster.addImage(fishomnsterimg);
    //fishmonster.debug=true;
    fishmonster.setCollider("circle",0,0,40);
    fishmonster.scale=0.1;
    if(MC=='E'){
     // if(World.frameCount % 140 ==0){
    fishmonster.velocityX=-5;
   // fishmonster.lifetime=800/10;
      //}
    }
    if(MC=='M'){
     // if(World.frameCount % 100 ==0){
      fishmonster.velocityX=-10;
     // fishmonster.lifetime=800/10;
     // }
    }
    if(MC=='H'){
     // if(World.frameCount % 80 ==0){
        fishmonster.velocityX=-15;
       // fishmonster.lifetime=800/10;
     // }
    }

    // creating fish monster
    var poison=createSprite(fishmonster.x,fishmonster.y);
    poison.addImage(poisonimg);
    poison.scale=0.5;
    if(MC=='E'){
      poison.velocityY=-5;  
   // poison.debug=true; 
    }
    if(MC=='M'){
      poison.velocityY=-10;  
      // poison.debug=true; 
    }
    if(MC=='H'){
      poison.velocityY=-15;  
      // poison.debug=true; 
    } 
    poison.setCollider("rectangle",0,0,200,200);

    fishmonstergroup.add(fishmonster);
    fishmonstergroup.setLifetimeEach(200);
    poisongroup.add(poison);
    poisongroup.setLifetimeEach(200);
  }
}

 // spawning trident
function spawntrident(){
  
  var trident=createSprite(hanuman.x,hanuman.y,0,0);
  trident.addImage(tridentimg);
  trident.scale=0.45;
  trident.velocityX=10;
  //trident.debug=true;

  hanuman.depth=trident.depth;

  tridentgroup.add(trident);
  tridentgroup.setLifetimeEach(300);

}

// spawning junglemonster
function spawnjunglemonster(){
  if(World.frameCount%150==0) {
   var monster3=createSprite(random(width-500,width-200),random(200,300),0,0);
  monster3.addImage(monster3img);
  monster3.scale=0.8;
  if(MC=='E'){
  monster3.velocityX=-4;
  monster3.velocityY=-4;
  }
  if(MC=='M'){
    monster3.velocityX=-8;
    monster3.velocityY=-8;
  }
  if(MC=='H'){
    monster3.velocityX=-14;
    monster3.velocityY=-14;
  }

  monster3.depth=hanuman.depth;
   hanuman.depth+=1;
  

  // Spawning sword for Eagle monster of level 3
   if(World.frameCount % 100 === 0){
    var sword= createSprite(monster3.x-100,monster3.y,10,10);
    sword.addImage(swordimage);
    sword.scale=0.8;
    if(MC=='E'){
      sword.velocityX=-7;
    }
    if(MC=='M'){
      sword.velocityX=-11;
    }
    if(MC=='H'){
      sword.velocityX=-15;
    }
    swordgroup.add(sword);
    swordgroup.setLifetimeEach(300);
    console.log("test");
   }
   
  monster3group.add(monster3);
  monster3group.setLifetimeEach(300);
  }
}

// Spawning air for hanuman in level 2
function spawnair(){
  var air= createSprite(hanuman.x,hanuman.y,10,10);
  air.addImage(airimg);
  air.scale=0.3;
  air.velocityX=8;
  airgroup.add(air);
  airgroup.setLifetimeEach(300);
}

// Spawning shield for hanuman in level 3
function spawnsheild(){
 var sheild= createSprite(hanuman.x-50,hanuman.y-50,10,10);
 sheild.addImage(sheildimage);
 sheild.scale=0.5
 sheild.velocityX=8;
 sheildgroup.add(sheild);
 sheildgroup.setLifetimeEach(200);
}

// Resetting the game
function reset(){
  console.log(MC);
  gamestate=home;
  chalisa.stop();
  sound.stop();
  audiobutton.x=1100;
  audiobutton.visible=true;
  wall.x=1800;
  Time=0;
  hanuman.x=width/8;
}