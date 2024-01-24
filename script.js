document.addEventListener('DOMContentLoaded', function() {
    const paneles = document.querySelectorAll('.panel')
    const seccion = document.querySelectorAll('.informacion')

    paneles.forEach(panel => {
        panel.addEventListener('click', () => {
            quitarClasesActivas()
            panel.classList.add('activo')
        })
    })


    paneles.forEach(panel => {
        panel.addEventListener('click',() => {
            informacion.classList.add('activo')
        })
    })


    function quitarClasesActivas() {
        paneles.forEach(panel => {
            panel.classList.remove('activo')
        })

        seccion.forEach(informacion => {
            informacion.classList.remove('activo')
        })
    }




})