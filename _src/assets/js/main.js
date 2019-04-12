'use strict';

console.log('>> Ready :)');

const listEls = document.querySelectorAll('.list-item');
console.log(listEls);

function listClickHandler(event) {
    event.currentTarget.classList.toggle('list-selected');
}

for (let i = 0; i < listEls.length; i++) {
    listEls[i].addEventListener('click', listClickHandler);
}