// Evento de click

const click = document.querySelector('.btn')

click.addEventListener('click', () => {
    alert('Click en el botón')
})

$(() => {

    $('.btn').click(() => {
        console.log('Hola, estoy utilizando jQuery')
    })

})