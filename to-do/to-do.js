const fs = require('fs');
const colors = require('colors');
let listadoPorHacer = []
const inicializar = () => {
    /*   data = fs.readFileSync('./db/data.json')
      data = JSON.parse(data)
      if (data) {
          return data
      } else {
          return []
      } */

    try {
        data = require('../db/data.json')
    } catch (error) {
        data = []
    }

    listadoPorHacer = data;
    //console.log(data)
}


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) console.log(err);
        else console.log("Tarea guardada");

    });
}


const crear = (descripcion) => {
    inicializar()
    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB()
    return porHacer;
}

const listar = () => {
    inicializar()
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    inicializar();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    inicializar();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    let borrado = false;
    if (index > -1) {
        listadoPorHacer.splice(index, 1);
        borrado = true;
        guardarDB();
    } else {
        borrado = false;
    }

    return borrado;
}


module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}