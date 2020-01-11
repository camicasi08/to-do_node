const createConfig = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const updateConfig = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', "Crear una tarea por hacer", createConfig)
    .command('listar', "", {})
    .command('actualizar', "Actualiza el estado completado de una tarea", updateConfig)
    .command('borrar', 'Borrar tarea', createConfig)
    .help()
    .argv;

module.exports = {
    argv
}