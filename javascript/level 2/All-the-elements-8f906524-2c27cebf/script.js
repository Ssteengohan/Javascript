const blue = document.getElementById('blue');
blue.classList.add('bc');

const tekst = document.querySelectorAll('p');
for (const elem of tekst) {
    elem.classList.add('hoi');
}