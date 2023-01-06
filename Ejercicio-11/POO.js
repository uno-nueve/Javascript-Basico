class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    obtenDatos() {
        return  {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const nuevoalumno = new Estudiante('Paola', ['Javascript', 'HTML', 'CSS'])

const datos = nuevoalumno.obtenDatos()
console.log(datos)