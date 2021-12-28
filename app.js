const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const start = document.querySelector('.btn__reset')
const ul = phrase.querySelector('ul')

const phrases = [
    "raining cats and dogs",
    "let the cat out of the bag",
    "a piece of cake",
    "kill two birds with one stone",
    "break a leg"
]

start.addEventListener('click', () => {
    overlay.style.display = 'none'
});

function getRandomPhraseAsArray (arr){
    let i = Math.floor(Math.random() * arr.length)
    let randomPhrase = arr[i]
    randomPhrase = randomPhrase.split('');
    return randomPhrase;
}



const randomPhrase = getRandomPhraseAsArray(phrases)

function addPhraseToDisplay (arr){
      for (let i = 0; i < arr.length; i++){
          let letter = arr[i]
          let li = document.createElement('li')
          li.innerHTML = letter
          ul.appendChild(li)
            if(li.textContent === " "){
                li.className = "space"
          }
            else{
                li.className = "letter"
          }
      }
  }

function checkLetter(btn){
        const li = document.querySelectorAll('li')
        let match = null;

        for (let i = 0; i < li.length; i++){
            if( li[i].textContent === btn.textContent){
                li[i].classList.add("show");
                match = btn.textContent;
            }
        }
        return match;
    }
function checkWin(){
  let letter = document.querySelectorAll('.letter')
  let now = document.querySelectorAll('.show')
    if (missed > 4) {
        overlay.className = 'lose';
        overlay.style.display = 'flex'
        const title = document.querySelector('.title')
        title.textContent = 'Game Over'
      }
  else if (now.length === letter.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex'
        const title = document.querySelector('.title')
        title.textContent = 'You Won!'
    }
}

qwerty.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON' && e.target.className !== "chosen"){
            e.target.className = "chosen"
            let check = checkLetter(e.target)
        if(check === null){
                let hearts = document.querySelectorAll('img');
                hearts[missed].setAttribute('src', "images/lostHeart.png")
                missed++
    }
          checkWin();
}})


addPhraseToDisplay(randomPhrase)
