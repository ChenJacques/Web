let i = 0;
document.querySelector('footer').addEventListener("click", compteur);

function compteur (){
    i++;
    document.querySelector('footer>div').innerHTML = i;
}


