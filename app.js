const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, listar, actualizar, borrar } = require('./to-do/to-do');

let command = argv._[0]

switch (command) {
    case 'crear':
        let tarea = crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = listar()
        for (const tarea of listado) {
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado ? colors.green('Terminado'): colors.red('Sin Terminar')}`);
        }
        break;
    case 'actualizar':
        let respuesta = actualizar(argv.descripcion, argv.completad)
        console.log(respuesta);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}

//console.log(argv);