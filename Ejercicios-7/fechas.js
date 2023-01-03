const fechaHoy = new Date()
const fechaNacimiento = new Date('November 6, 1995')

let compararFechas = fechaHoy > fechaNacimiento

let dia = fechaNacimiento.getDate()

let mes = fechaNacimiento.getMonth() + 1

let anyo = fechaNacimiento.getFullYear()