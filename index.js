function mostrarSobreMi() {
    const parrafoSobreMi = document.getElementById("sobre");
    if(parrafoSobreMi.style.display === 'initial') {
        parrafoSobreMi.style.display = 'none';
    } else {
        parrafoSobreMi.style.display = 'initial';
    }
}