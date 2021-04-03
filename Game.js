class Game{
    constructor(){


    }
    getState(){
        var gsRef=database.ref('gameState')
        gsRef.on('value',function(data){
            gameState=data.val()
        })
    }
    update(newState){
        database.ref('/').update({
            gameState:newState 
        })
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountRef=await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
            playerCount=playerCountRef.val()
            player.getCount()
            }
            form=new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(30);
        text("Game Start", 120,100)
        Player.getPlayerInfo()

        if(allPlayers!==undefined){
            var displayPosition=130;
            for(var plr in allPlayers){
                if(plr==="player" + player.index){
                    fill("red")
                } else{
                    fill("black")
                }
                displayPosition+=20
                textSize(50)
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displayPosition)
            }
        }
    }
}