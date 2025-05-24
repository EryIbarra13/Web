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

const btnAgregar = document.getElementById('agregar');
const btnDisminuir = document.getElementById('disminuir');
const cantidadInput = document.getElementById('cantidad');
const totalBoletosSpan = document.getElementById('totalBoletos');

let cantidad = 1;

function actualizarCantidad() {
    cantidadInput.value = cantidad;
    totalBoletosSpan.textContent = cantidad;
    if (cantidad <= 1) {
        btnDisminuir.disabled = true;
    } else {
        btnDisminuir.disabled = false;
    }
  }

actualizarCantidad();

btnAgregar.addEventListener('click', () => {
    cantidad++;
    actualizarCantidad();
});

btnDisminuir.addEventListener('click', () => {
    if (cantidad > 1) {
        cantidad--;
        actualizarCantidad();
    }
});

  document.getElementById('compraForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const tipoSelect = document.getElementById('tipoEvento');
    const resultadoDiv = document.getElementById('resultado');

    const eventoSeleccionado = tipoSelect.options[tipoSelect.selectedIndex];


    if (!eventoSeleccionado || !eventoSeleccionado.getAttribute('data-precio')) {
      resultadoDiv.innerHTML = 'Por favor, seleccione un evento válido.';
      return;
    }

    const precioPorBoleto = parseFloat(eventoSeleccionado.getAttribute('data-precio'));
    const cantidadSeleccionada = cantidad;

    const total = precioPorBoleto * cantidadSeleccionada;

    resultadoDiv.innerHTML = `
      Has seleccionado ${cantidadSeleccionada} boleto(s) en modo "${eventoSeleccionado.value}".
      <br>Precio por boleto: $${precioPorBoleto}
      <br>Total a pagar: <strong>$${total}</strong>
    `;
  });