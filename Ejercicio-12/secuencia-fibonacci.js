function fibonacci(num) {
    let secuencia = []
    secuencia[0] = 0
    secuencia[1] = 1
    for (i = 2; i < num; i++) {
        secuencia[i] = secuencia[i - 1] + secuencia[i - 2]
    }
    return secuencia
}

const secuenciaFibonacci = fibonacci(8)
console.log(secuenciaFibonacci)