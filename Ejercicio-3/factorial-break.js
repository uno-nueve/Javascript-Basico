// Factorial usando while, if y break
let numero = 1
let factorial = 1

while (numero <= 1000) {
    factorial *= numero
    numero++
    if (numero > 10) {
        break
    }
}

console.log(factorial)