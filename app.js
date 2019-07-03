const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + archivo.blue))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}

//console.log(argv);