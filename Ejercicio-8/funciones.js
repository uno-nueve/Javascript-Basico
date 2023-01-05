function miFun() {
    return true
}

console.log(miFun())

function miAsinc() {
    console.log('Hola soy una promesa')
}

setTimeout(miAsinc, 5000)

function* pares() {
    n = 0
    while(true) {
        n += 2
        if (n % 2 !== 0) {
            return n
        }
        yield n 
    }
}

const numeros = pares()

console.log(numeros.next().value)
console.log(numeros.next().value)
console.log(numeros.next().value)
console.log(numeros.next().value)
console.log(numeros.next().value)
console.log(numeros.next().value)
console.log(numeros.next().value)
console.log(numeros.next().value)
console.log(numeros.next().value)
console.log(numeros.next().value)