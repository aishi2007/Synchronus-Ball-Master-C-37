class Player{
    constructor(){
    this.distance=0
    this.name=null
    this.index=null
    }
    getCount(){
        var playerRef=database.ref('playerCount')
        playerRef.on('value',(data)=>{
            playerCount=data.val()
        })
    }
    updateCount(newCount){
        database.ref('/').update({
            playerCount:newCount
        })
    }
    update(){
        var pIndex="players/player"+ this.index
        database.ref(pIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfoRef=database.ref('players')
        playerInfoRef.on('value', (data)=>{
            allPlayers=data.val()
        })
    }
}