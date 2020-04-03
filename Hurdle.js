class Hurdle{
    constructor(x,y){
    }
    display(){
        if(World.frameCount% 100===0 && gameState===1){
            var hurdle= createSprite(400,350,50,20);
            hurdle= addImage("hurdle",hurdleImg);
        }
    }
}

 