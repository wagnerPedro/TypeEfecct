const DoomElement = document.querySelector("#text");
const text = 'O javascript é muito interessanta!';
const interval = 300;

function showText(DoomElement, text, interval) {

    const char = text.split("").reverse();

    console.log(char);
}

showText(DoomElement, text, interval);