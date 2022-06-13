const contenedor = document.getElementById("cambiante");
const steamBotButton = document.getElementById("steam-bot-button");
const buttonTrabajo = document.getElementById("button-trabajo");
const steamBot = document.getElementById("steam-bot");
contenedorOriginal = contenedor.innerHTML;
const eliminarInfo = document.getElementById("eliminar-info");
const parallax1 = document.getElementById("parallax-1");

// Funcion que cambia el contenido del contenedor

// funcion que se activa al dar click
//esconder contenedor
function esconderContenedor() {
	if (contenedor.classList.contains("is-hidden")) {
		contenedor.classList.remove("is-hidden");
		contenedor.classList.remove("desaparecer");
		contenedor.classList.add("aparecer");
		steamBot.className += " is-hidden";
	}
}
function mostrarSteam() {
	contenedor.classList.add("desaparecer");
	setTimeout(function () {
		contenedor.className += " is-hidden";
		steamBot.classList.remove("is-hidden");
	}, 500);
}
function ocultarInfo() {
	if (parallax1.classList.contains("animacion-arriba")) {
		parallax1.classList.remove("animacion-arriba");
	} else {
		parallax1.classList.add("animacion-arriba");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	}
}
buttonTrabajo.addEventListener("click", esconderContenedor);
steamBotButton.addEventListener("click", mostrarSteam);
eliminarInfo.addEventListener("click", ocultarInfo);
