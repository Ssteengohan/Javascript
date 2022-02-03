function color() {
    const tekst = document.querySelector('body');
    tekst.classList.add('back');
}
const button = document.querySelector('button');
button.onclick = color;
