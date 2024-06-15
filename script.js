//Display the Player selection option when the play button get click
document.querySelector("#play").addEventListener("click", (e)=>{
    document.querySelector("#header").style.display="none";
    
    document.querySelector("#player_selection_container").style.display="flex";
})

//Display the player1 identity when the player choose one player
function onePlayer(){
    document.querySelector("#player_selection_container").style.display="none";
    document.querySelector("#player_identity").style.display="flex";

    
}

//Display the player2 identity when the player choose two player
function twoPlayer(){
    document.querySelector("#player_selection_container").style.display="none";
    document.querySelector("#player_identity").style.display="flex";
}

//Display the Game when the player choose their identity
function playerIdentity(event){
    document.querySelector("#player_identity").style.display="none";
    document.querySelector("#game_container").style.display="flex";
    let identity = event.target.innerHTML;
    playGame(identity);
    
}

function playGame(e){
    let playerIdentity = e;
    let allSpot =document.querySelectorAll(".spot");
for(let i =0; i < allSpot.length; i++){
    let spot = allSpot[i];
    spot.addEventListener("click", (evt)=>{
        evt.target.innerHTML =playerIdentity;
//Winning positions
    let winPosition = [
        "123",
        "456",
        "789",
        "147",
        "258",
        "369",
        "357",
        "159"
    ]
    })
}
}


