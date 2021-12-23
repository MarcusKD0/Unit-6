const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const start = document.querySelector('.btn__reset')

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
        phrase.appendChild(li)
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
            li[i].className = "show";
            let match = btn.textContent;
            console.log(btn.textContent);
        }
    }
    return match;
}


qwerty.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && e.target.className !== "chosen"){
        e.target.className = "chosen"
        let check = checkLetter(e.target)
        if(check === null && missed < 5){
//remove heart #scoreboard
            console.log(missed)
            let hearts = document.querySelectorAll('img')
            console.log(hearts);
            hearts[missed].setAttribute('src', "images/lostHeart.png")
            missed++
        }
        else if (missed === 5) {
          console.log('ok')
        }
    }

})

if (missed === 5) {
  console.log('ok');
}

addPhraseToDisplay(randomPhrase)

//console.log(randomPhrase);
