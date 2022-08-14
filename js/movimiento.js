const contenedor = document.getElementById("cambiante");
const steamBotButton = document.getElementById("steam-bot-button");
const buttonTrabajo = document.getElementById("button-trabajo");
const steamBotContenedor = document.getElementById("steam-bot-contenedor");
const eliminarInfo = document.getElementById("eliminar-info");
const parallax1 = document.getElementById("parallax-1");
const universoContenedor = document.getElementById("universo-contenedor");
const buttonUniverso = document.getElementById("universo-button");

// Funcion que cambia el contenido del contenedor

// funcion que se activa al dar click
//esconder contenedor
function esconderContenedor() {
	if (contenedor.classList.contains("is-hidden")) {
		contenedor.classList.remove("is-hidden");
		contenedor.classList.remove("desaparecer");
		contenedor.classList.add("aparecer");
		if (!steamBotContenedor.classList.contains("is-hidden")) {
			steamBotContenedor.className += " is-hidden";
		}
		if (!universoContenedor.classList.contains("is-hidden")) {
			universoContenedor.className += " is-hidden";
		}
	}
}
function mostrarUniverso() {
	contenedor.classList.add("desaparecer");
	setTimeout(function () {
		contenedor.className += " is-hidden";
		universoContenedor.classList.remove("is-hidden");
	}, 500);
}
function mostrarSteam() {
	contenedor.classList.add("desaparecer");
	setTimeout(function () {
		contenedor.className += " is-hidden";
		steamBotContenedor.classList.remove("is-hidden");
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
buttonUniverso.addEventListener("click", mostrarUniverso);
