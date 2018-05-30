const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea '
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tara', { descripcion, completado })
    .command('borrar', 'borra un elemento de la lista', { descripcion })
    .help()
    .argv;


module.exports = {

    argv
}