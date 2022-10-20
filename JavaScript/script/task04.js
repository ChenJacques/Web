const a = document.getElementsByTagName('button')[0];
const b = document.getElementsByTagName('button')[1];
const tout = document.querySelector('body');
const colors = document.querySelector('select');

c = 16;
d = c -1;

a.onclick = function() {
    tout.style.fontSize = c++ + 1 + 'px';
    d = c - 1;
}

b.onclick = function () {
    tout.style.fontSize = d-- -1 + 'px';
    c = d + 1; 
}

colors.onchange = function () {
    tout.style.backgroundColor = colors.value;
}
