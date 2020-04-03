class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef= await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
      playerCount=playerCountRef.val();
      player.getCount();
      }
      form = new Form()
      form.display();
    }
    runner1=createSprite(100,200);
    runner1= addImage("runner1",runner1Img);
    runner2=createSprite(300,200);
    runner2= addImage("runner2",runner2Img);
    runner3=createSprite(500,200);
    runner3= addImage("runner3",runner3Img);
    runner4=createSprite(700,200);
    runner4= addImage("runner4",runner4Img);
    runner=[runner1,runner2,runner3,runner4];
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //var display_position = 130;
      var index= 0;
      var x=0;
      var y;
     
      for(var plr in allPlayers){
        index= index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;

        if (index===player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y
        }
       
      }
    }

    if(keyIsDown(space) && player.index !== null){
      player.velocityY = -10
      player.update();
    }
    player.velocityY = player.velocityY + 0.8;
    if(player.distance>3860){
      gameState=2
    }
    drawSprites();
  }
  
  

  }
  
  


