const argv = require('./config/yargs').argv;

const {crearArchivo,listarArchivo} = require ("./multiplicar/multiplicar");
// console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'listar':
        // console.log('listar');
        listarArchivo(argv.base,argv.limite);
    break;
    case 'crear':
          crearArchivo(argv.base).then(archivo => { console.log(`Archivo creado: ${archivo}`);});
    break;
    default:
        console.log('Comando no reconocido');
    break;
}

// let base = 6
// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv);
// console.log(argv2);
// console.log(multiplicar);
