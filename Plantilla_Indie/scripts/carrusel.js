/* Lógica para el Carrusel Principal 
   ---------------------------------
   Maneja el cambio de diapositivas, controles anterior/siguiente 
   y navegación por puntos.
*/

let diapositivaInicial = 1;

// Iniciamos el carrusel mostrando la primera diapositiva
// Aseguramos que el DOM esté cargado antes de ejecutar si el script está en el head
// o simplemente lo ejecutamos si está al final del body.
document.addEventListener("DOMContentLoaded", () => {
  mostrarDiapositivas(diapositivaInicial);
});

// Controles Siguiente / Anterior
function moverDiapositiva(n) {
  mostrarDiapositivas((diapositivaInicial += n));
}

// Controles de imagen en miniatura (puntos)
function diapositivaActual(n) {
  mostrarDiapositivas((diapositivaInicial = n));
}

function mostrarDiapositivas(n) {
  let i;
  let diapositivas = document.getElementsByClassName("slide");
  // Nota: Si usas puntos en el HTML, asegúrate de que existan o añade un check
  // para evitar errores si en alguna página no hay puntos.
  let puntosDiapos = document.getElementsByClassName("puntosCarrusel"); // Opcional si usas puntos

  // Si no hay diapositivas en esta página, salimos para evitar errores
  if (!diapositivas || diapositivas.length === 0) return;

  if (n > diapositivas.length) {
    diapositivaInicial = 1;
  }
  if (n < 1) {
    diapositivaInicial = diapositivas.length;
  }

  // Ocultar todas las diapositivas
  for (i = 0; i < diapositivas.length; i++) {
    diapositivas[i].style.display = "none";
    diapositivas[i].classList.remove("activa");
  }

  // (Opcional) Quitar estado activo de los puntos si existen
  /* if (puntosDiapos.length > 0) {
        for (i = 0; i < puntosDiapos.length; i++) {
            puntosDiapos[i].className = puntosDiapos[i].className.replace(" active", "");
        }
        if (puntosDiapos[diapositivaInicial - 1]) {
            puntosDiapos[diapositivaInicial - 1].className += " active";
        }
    }
    */

  // Mostrar la diapositiva actual
  // Usamos 'flex' porque en el CSS definimos display: flex para centrar contenido
  if (diapositivas[diapositivaInicial - 1]) {
    diapositivas[diapositivaInicial - 1].style.display = "flex";
    diapositivas[diapositivaInicial - 1].classList.add("activa");
  }
}
    