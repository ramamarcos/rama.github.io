document.addEventListener('DOMContentLoaded', function() {
    const paneles = document.querySelectorAll('.panel');
    const secciones = document.querySelectorAll('.informacion');

    paneles.forEach((panel, index) => {
        panel.addEventListener('click', () => {
            quitarClasesActivas();
            panel.classList.add('activo');
            secciones[index].classList.add('activo');
        });
    });

    function quitarClasesActivas() {
        paneles.forEach(panel => {
            panel.classList.remove('activo');
        });

        secciones.forEach(seccion => {
            seccion.classList.remove('activo');
        });
    }
});