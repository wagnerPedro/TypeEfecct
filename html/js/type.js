const DoomElement = document.querySelector("#text");
const text = 'O javascript é muito interessante!';
const interval = 200;

function showText(DoomElement, text, interval) {

    const char = text.split("").reverse();

    /* intervalo em que cada letra é apresenda, ou mostra no Doom*/
    const typer = setInterval(() => {
        
        if(!char.length) { //Se não existirem mais caracteres no char
            return clearInterval(typer); //limpa o intervalo, e para a função!
        }

        //inserindo caracteres no Doom
        const nextLetter = char.pop(); //pega último elemento

        DoomElement.innerHTML += nextLetter; //mostra no Doom cada letra

    }, interval);
}

showText(DoomElement, text, interval);

#me siga no instagram: https://instagram.com./wagner.pedro0