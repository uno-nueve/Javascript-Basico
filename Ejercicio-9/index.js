const logger = require('./logger')

function mensajeError() {
    if (typeof num === 'number') {
        return num * num
    }
    throw new Error('Has cometido un error')
}

const num = '4'

try {
    let math = mensajeError(num)
    logger.info(math)
} catch (e) {
    logger.error(e)
}

