"use strict";
const calBody = document.querySelector('.cal-body');
const result = document.querySelector('h2');
let entries = "";

calBody.addEventListener('click', (e) => {
    if (e.target.id === 'equal' && entries !== "") {
        calcul();
    } else if (e.target.id === 'equal' 
    || e.target.className === "special-keys" 
    && entries === "") {
        result.innerText = 0;
    } else if (e.target.tagName === 'P') {
        keyPressed(e.target);
    }
});

function keyPressed(element) {
    result.innerText = "";
    entries += element.innerText;
    entries = entries.replace('X', '*');
    result.innerText = entries;
}

function calcul() {
    result.innerText = eval(entries);
    entries = "";
}
