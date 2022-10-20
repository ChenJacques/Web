document.querySelector('footer').addEventListener("click", yourname);

function yourname (){
    let name = prompt("What's your name ?");
    while (name == null | name == "") {
        name = prompt("What's your name ?");
    }
    let confirmation = confirm('Are you sure that '+name+' is your name ?');
    if (confirmation == true) {
        alert ('Hello '+name+' !');
        document.querySelector('footer>div').innerHTML = 'Hello '+name+' !';
    }
}
