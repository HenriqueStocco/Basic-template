function meuEscopo() {
    function recebeEventoForm(evento) {
        evento.preventDefault();
    }
}

form.addEventListener('submit', recebeEventoForm);
meuEscopo();