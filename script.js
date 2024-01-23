document.addEventListener('DOMContentLoaded', function() {
    const paneles = document.querySelectorAll('.panel')

    paneles.forEach(panel => {
        panel.addEventListener('click', () => {
            quitarClasesActivas()
            panel.classList.add('activo')
        })
    })

    function quitarClasesActivas() {
        paneles.forEach(panel => {
            panel.classList.remove('activo')
        })
    }
})