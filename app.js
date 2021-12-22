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
    const letter = document.querySelectorAll('.letter')
    let match = 'null';

    for (let i = 0; i < letter.length; i++){
        if( letter[i].textContent === btn.textContent){
            letter[i].className = "show";
            let match = btn.textContent;
        }
    }
    return match;
}


qwerty.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && e.target.className !== "chosen"){
        e.target.className = "chosen"
        let results = checkLetter(e.target)
        if(results === 'null'){
            //remove heart #scoreboard
            console.log(missed)
            let hearts = document.querySelectorAll('img')
            console.log(hearts);
            hearts[missed].setAttribute('src', "images/lostHeart.png")
            missed++
        }

    }

})


addPhraseToDisplay(randomPhrase)

//console.log(randomPhrase);
