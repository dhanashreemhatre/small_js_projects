let player={
    Name:"per1",
    Chips:145
}
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false



let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name+": $"+player.Chips

let message=""
let messageEl=document.getElementById("message-el")
let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1
    if(randomCard===1){
        return 11
    }
    else if(randomCard>10){
        return 10
    }
    else{
        return randomCard
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<=20){
        message="Do you want to draw new card?"
    }
    else if(sum===21){
        message="You've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="You're out of the game !"
        isAlive=false
    }
messageEl.textContent=message

}
function newCard(){
    if(hasBlackJack===false && isAlive===true){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()

        
    }
    
}
