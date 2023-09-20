// Este es un ejemplo simple de JavaScript para agregar interacción.

// Cambiar el color de fondo del encabezado al hacer clic en él.
const header = document.querySelector('header');
header.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
});
// Cambia el color de fondo cuando el cursor se posicione en el elemento
function changeBackground(element) {
    element.style.backgroundColor = 'yellow';
}

// Restablece el color de fondo cuando el cursor se mueva del elemento
function resetBackground(element) {
    element.style.backgroundColor = '';
}

