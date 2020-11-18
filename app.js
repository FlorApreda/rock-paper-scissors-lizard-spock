let puntajesUsuarie = document.querySelector('.puntaje-usuarie p')
let puntajesComputadora = document.querySelector('.puntaje-computadora p')

let puntosUsuarie = 0
let puntosComputadora = 0

let eleccionComputadora = ''
let eleccionUsuarie = ''

let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')
let botonLagarto = document.querySelector('.lagarto')
let botonSpock = document.querySelector('.spock')

let resultadoTexto = document.querySelector('.resultado')

let manoUsuarie = document.querySelector('.mano-usuarie')
let manoComputadora = document.querySelector('.mano-computadora')
let tablero = document.querySelector('.tablero')

botonPiedra.onclick = () => {
	resultadoTexto.textContent = '🤨'
	manoComputadora.src = './assets/piedra_computadora.png'
	manoUsuarie.src = './assets/piedra_ada.png'
	tablero.classList.add('jugando')
	setTimeout(() => {
		tablero.classList.remove('jugando')
		eleccionUsuarie = 'piedra'
		manoUsuarie.src = './assets/piedra_ada.png'
		obtenerEleccionComputadora()
		decidirPuntaje()
	}, 2000)
}

botonPapel.onclick = () => {
	resultadoTexto.textContent = '🤨'
	manoComputadora.src = './assets/piedra_computadora.png'
	manoUsuarie.src = './assets/piedra_ada.png'
	tablero.classList.add('jugando')
	setTimeout(() => {
		tablero.classList.remove('jugando')
		eleccionUsuarie = 'papel'
		manoUsuarie.src = './assets/papel_ada.png'
		obtenerEleccionComputadora()
		decidirPuntaje()
	}, 2000)
}

botonTijera.onclick = () => {
	resultadoTexto.textContent = '🤨'
	manoComputadora.src = './assets/piedra_computadora.png'
	manoUsuarie.src = './assets/piedra_ada.png'
	tablero.classList.add('jugando')
	setTimeout(() => {
		tablero.classList.remove('jugando')
		eleccionUsuarie = 'tijera'
		manoUsuarie.src = './assets/tijera_ada.png'
		obtenerEleccionComputadora()
		decidirPuntaje()
	}, 2000)
}

botonLagarto.onclick = () => {
	resultadoTexto.textContent = '🤨'
	manoComputadora.src = './assets/piedra_computadora.png'
	manoUsuarie.src = './assets/piedra_ada.png'
	tablero.classList.add('jugando')
	setTimeout(() => {
		tablero.classList.remove('jugando')
		eleccionUsuarie = 'lagarto'
		manoUsuarie.src = ''
		obtenerEleccionComputadora()
		decidirPuntaje()
	}, 2000)
}

botonSpock.onclick = () => {
	resultadoTexto.textContent = '🤨'
	manoComputadora.src = './assets/piedra_computadora.png'
	manoUsuarie.src = './assets/piedra_ada.png'
	tablero.classList.add('jugando')
	setTimeout(() => {
		tablero.classList.remove('jugando')
		eleccionUsuarie = 'Spock'
		manoUsuarie.src = ''
		obtenerEleccionComputadora()
		decidirPuntaje()
	}, 2000)
}


const obtenerEleccionComputadora = () => {
	let numeroAlAzar = Math.floor(Math.random() * 3)
	if (numeroAlAzar == 0) {
		eleccionComputadora = 'piedra'
		manoComputadora.src = './assets/piedra_computadora.png'
	} else if (numeroAlAzar == 1) {
		eleccionComputadora = 'papel'
		manoComputadora.src = './assets/papel_computadora.png'
	} else if (numeroAlAzar == 2) {
		eleccionComputadora = 'tijera'
		manoComputadora.src = './assets/tijera_computadora.png'
	} else if (numeroAlAzar == 3) {
		eleccionComputadora = 'lagarto'
		manoComputadora.src = ''
} else {
	eleccionComputadora = 'Spock'
		manoComputadora.src = ''
}


const decidirPuntaje = () => {
	if (eleccionComputadora == 'piedra') {
		if (eleccionUsuarie == 'piedra') {
			resultadoTexto.textContent = 'Empate! 😐'
		} else if (eleccionUsuarie == 'papel') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		} else if (eleccionUsuarie == 'Spock') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		}else {
			puntosComputadora++
			puntajesComputadora.textContent = puntosComputadora
			resultadoTexto.textContent = 'Perdiste 💩'
		}
	} else if (eleccionComputadora == 'papel') {
		if (eleccionUsuarie == 'papel') {
			resultadoTexto.textContent = 'Empate! 😐'
		} else if (eleccionUsuarie == 'tijera') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		} else if (eleccionUsuarie == 'lagarto') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		}else {
			puntosComputadora++
			puntajesComputadora.textContent = puntosComputadora
			resultadoTexto.textContent = 'Perdiste 💩'
		}
	} else if (eleccionComputadora == 'tijera') {
		if (eleccionUsuarie == 'tijera') {
			resultadoTexto.textContent = 'Empate! 😐'
		} else if (eleccionUsuarie == 'piedra') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		} else if (eleccionUsuaria == 'Spock') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		}else {
			puntosComputadora++
			puntajesComputadora.textContent = puntosComputadora
			resultadoTexto.textContent = 'Perdiste 💩'
		}
	} else if (eleccionComputadora == 'lagarto') {
		if (eleccionUsuarie == 'lagarto') {
			resultadoTexto.textContent = 'Empate! 😐'
		} else if (eleccionUsuarie == 'piedra') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		} else if (eleccionUsuarie == 'tijera') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		} else {
			puntosComputadora++
			puntajesComputadora.textContent = puntosComputadora
			resultadoTexto.textContent = 'Perdiste 💩'
		}
	} else if (eleccionComputadora == 'Spock') {
		if (eleccionUsuarie == 'Spock') {
			resultadoTexto.textContent = 'Empate! 😐'
		} else if (eleccionUsuarie == 'lagarto') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		} else if (eleccionUsuarie == 'papel') {
			resultadoTexto.textContent = 'Ganaste 😍'
			puntosUsuarie++
			puntajesUsuarie.textContent = puntosUsuarie
		}else {
			puntosComputadora++
			puntajesComputadora.textContent = puntosComputadora
			resultadoTexto.textContent = 'Perdiste 💩'
		}
	}
}
}
