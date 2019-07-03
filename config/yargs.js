const vars = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command(
        'listar',
        'Imprime en consola la tabla de multiplicar', vars)
    .command(
        'crear',
        'crea un archivo txt con la tabla de multiplicar como contenido',
        vars)
    .help()
    .argv;


module.exports = {
    argv
}