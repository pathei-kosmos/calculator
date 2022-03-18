const keys = document.querySelectorAll('p');
const equal = document.querySelector('#equal');
const result = document.querySelector('h2');
let entries = "";

for (let i = 0; i < keys.length-1; i++) {
    keys[i].addEventListener('click', (e) => keyPressed(e.target));
}

equal.addEventListener('click', () => calcul());

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