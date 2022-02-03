var achtergrondkleur = '';
function myfunction() {
    achtergrondkleur = document.getElementById('head').value;
}
const op = document.getElementById('op');
op.onclick = myfunction;

var titel = '';
function myfunction2() {
    titel = document.getElementById('head').value;
}
const ewa = document.getElementById('ewa');
ewa.onclick = myfunction2;

function toepassen() {
    document.body.style.backgroundColor = achtergrondkleur;
    document.getElementById('jo').style.color = titel;
}
const ko = document.getElementById('ko');
ko.onclick = toepassen;