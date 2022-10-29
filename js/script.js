let bads = [
    
    "2 slurke",
    "3 slurke",
    "4 slurke",
    "Din tur igen",
    "Uddel en slurk",
    "",
    "1 slurk",
    "1 slurk",
    "1 slurk",
    "1 slurk",
    "1 slurk",
    "1 slurk",
    "1 slurk",
    "1 slurk",
    "1 slurk",
]
const game = document.querySelector('#gameSec')
let allH3 = document.querySelectorAll("h3")
let count = 0;
let allArt = []
let randomNumberArray = []
let numberOfCards = 15
let randomValue = Math.round(Math.random() * bads.length)
let numberOfBads = randomValue
let baddies = numberOfBads / 2 ;
let dulls = numberOfCards - baddies
let randomNumber = Math.round(Math.random() * numberOfCards)  
const dullsH2 = document.querySelector('#dulls')

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function makeBoard() {
    for (let index = 0; index < numberOfBads; index++) {
        randomNumberArray.push(Math.round(Math.random() * numberOfCards))
        
    }
    for (let index = 0; index < numberOfCards; index++) {
        const element = bads[index];

    }
    shuffle(bads)
    for (let index = 0; index < numberOfCards; index++) {
        const element = bads[index];
        
        if (randomNumberArray.indexOf(index) >= 0) {
                    game.innerHTML += `    
        <article>
        <div class="front bubbly-button"></div>
        <div class="back">${element}</div> 
        </article>`  

        }else{
            game.innerHTML += `    
            <article>
            <div class="front bubbly-button"></div>
            <div class="back"></div> 
            </article>`
        }


        
    }
    dulls = numberOfCards - baddies
    document.querySelector('#baddies').innerHTML = "Baddies: " + "Ca " +  baddies
    document.querySelector('#dulls').innerHTML = "Nitter: " + dulls
    count = 0; 
    flip()
}
 

function flip() {
    document.querySelectorAll('article').forEach(element => {
        element.addEventListener('click', function compareing(){
            
            if (element.children[1]. innerText !== "") {
                 setTimeout(() => {
            element.children[0].classList.toggle('back')
            element.children[1].classList.toggle('back2')
            element.children[1].style.pointerEvents = "none";
            element.style.pointerEvents = "none";
           }, 500);
            }else{
                element.children[1].style.pointerEvents = "none";
                element.style.pointerEvents = "none";  
            }
            
          
            
        
    });
    
}
)}
makeBoard()
function point() {
    baddies += 1
    
}

function newGame() {
location.reload()

}
document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 17:
            newGame()
          break;
          case 32:
            newGame()
          break;
   default:
        break; 
    }
    

}; 

