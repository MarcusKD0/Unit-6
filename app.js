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
        console.log(li)
        if(li.textContent === " "){
            li.className = "space"
        }
        else{
            li.className = "letter"
        }
    }
}

function checkLetter(){
    const letter = document.getElementsByClassName('letter')
    console.log(letter)
}


qwerty.addEventListener('click', () => {
    if(className !== "chosen"){
        qwerty.button.className = "chosen"
    }
})


addPhraseToDisplay(randomPhrase)
checkLetter()

//console.log(randomPhrase);