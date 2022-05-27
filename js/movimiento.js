const contenedor = document.getElementById("cambiante");
const cardSteam = document.getElementById("steam-bot");

// Funcion que cambia el contenido del contenedor
const contenido = "hola";
function cambiarContenido(contenido) {
	contenedor.innerHTML = contenido;
}
// funcion que se activa al dar click
function cambiarContenidoClick() {
	cambiarContenido(contenido);
}
//darle una función a un contenedor
cardSteam.addEventListener("click", cambiarContenidoClick);
