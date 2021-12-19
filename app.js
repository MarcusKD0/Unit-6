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
for (let i = 0; i > arr.length; i++ )
//document.createElement(li)
console.log(i)
}





console.log(randomPhrase);