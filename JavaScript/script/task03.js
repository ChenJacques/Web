const keyboard = document.querySelector('html');
text = "";
keyboard.addEventListener('keypress', a => {
    text = text+a.key;
    document.querySelector('footer>div').innerHTML = text;
    if (text.length >= 42) {
        text = text.substring(1); 
    }
})
