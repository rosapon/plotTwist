'use strict';

const result = document.querySelector('.js-result');
const button = document.querySelector('.js-btnLetter');
const thing = document.querySelector('.js-thing');
const thingBtn = document.querySelector('.js-btn2');
const infoBtn = document.querySelector('.js-info');
const infoBox = document.querySelector('.infoBox');
const collapse = document.querySelector('.collapse');
const main = document.querySelector('.js-main');

const dice = {
    sides: 26,
    roll: function () {
        let randomLetter = Math.floor(Math.random() * this.sides) + 1;
        return randomLetter;
    }
}

function printLetter(letter) {
    result.innerHTML = letter;
}

button.addEventListener('click', function () {
    const rolledLetter = String.fromCharCode(96 + dice.roll());
    printLetter(rolledLetter);
});


function randomThing() {
   
    const randomThing = Math.floor(Math.random() * 4) + 1;

    if (randomThing === 1) {
        thing.innerHTML = "A Character";
    } else if (randomThing === 2) {
        thing.innerHTML = "An Object";
    } else if (randomThing === 3) {
        thing.innerHTML = "An Event";
    } else {
        thing.innerHTML = "An Action";
    }
}


thingBtn.addEventListener('click', randomThing);




function toggleInfoBox() {
    infoBox.classList.toggle('collapse');
}

function hideInfoBox(event) {
    if (!infoBox.contains(event.target) && event.target !== infoBtn) {
        infoBox.classList.add('collapse');
    }
}

infoBtn.addEventListener('click', toggleInfoBox);
document.addEventListener('click', hideInfoBox);
