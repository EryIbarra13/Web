// Redes sociales
let textElement = document.getElementById("Textoenmovimiento");
let position = 0;
let speed = 0; // Ajusta la velocidad

function moveText() {
    position -= speed;
    textElement.style.Left = position + "px";

    if (position > +textElement.offsetWidth) {
        position = window.innerWidth;
    }

    requestAnimationFrame(moveText);
}

moveText();

