const keys = document.querySelectorAll('p');
let entries = [];

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e) => keyPressed(e.target));
}

function keyPressed(element) {
    console.log(element.innerText)
}