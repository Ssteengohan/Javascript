function changecolor() {
    const color = document.getElementById('head').value;
    document.body.style.backgroundColor = color;
}
const button = document.querySelector('button');
button.onclick = changecolor;
