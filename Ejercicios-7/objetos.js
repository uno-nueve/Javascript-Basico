const data = {
    nombre: 'Luciano',
    apellido: 'Montilla',
    edad: 27,
    altura: 1.80,
    eresDesarrollador: true
}

let varEdad = data.edad

const personas = [ 
    data, 
    {nombre: 'Debora', apellido: 'Escudero', edad: 28, altura: 1.56, eresDesarrollador: false},
    {nombre: 'Gabriel', apellido: 'Quevedo', edad: 26, altura: 1.77, eresDesarrollador: false}
]

const listaPorEdad = [...personas.sort((a, b) => a.edad - b.edad)]

console.log(listaPorEdad)
