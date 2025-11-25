let diapositivaInicial = 1;
mostrarDiapositivas(diapositivaInicial);

// Next/previous controls
function moverDiapositiva(n) {
    mostrarDiapositivas(diapositivaInicial += n);
}

// Thumbnail image controls
function diapositivaActual(n) {
    mostrarDiapositivas(diapositivaInicial = n);
}

function mostrarDiapositivas(n) {
    let i;
    let diapositivas = document.getElementsByClassName("imagenCarrussel");
    let puntosDiapos = document.getElementsByClassName("puntosCarrusel");

    if (n > diapositivas.length){
        diapositivaInicial = 1;
    }
    if (n < 1){
        diapositivaInicial = diapositivas.length;
    }

    for (i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }
    for (i = 0; i < puntosDiapos.length; i++) {
        puntosDiapos[i].className = puntosDiapos[i].className.replace(" active", "");
    }
    
    diapositivas[diapositivaInicial-1].style.display = "block";
    puntosDiapos[diapositivaInicial-1].className += " active";
} 