// Strings base
let nombre = 'Luciano';
let apellido = 'Montilla';

// Manipulación de strings
let estudiante = nombre + ' ' + apellido;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let num = estudiante.length;
let firstNombre = nombre.charAt(0);
let lastApellido = apellido.charAt(7);
let sinEspacio = `${nombre}${apellido}`;
let estaEn = estudiante.includes(nombre)


console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(num)
console.log(firstNombre)
console.log(lastApellido)
console.log(sinEspacio)
console.log(estaEn)