
const readF = require("./read.js");
const writeF = require("./write.js");

const deleteF = (id_baseDeDatos) => {
    let data = readF();

    let datafiltered = data.filter(data => data.id !== id_baseDeDatos);
    console.log(datafiltered);
    writeF(datafiltered);
    return (`El id ${id_baseDeDatos} ha sido eliminado`);
};

module.exports = deleteF;

