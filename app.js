const cargarF = require("./functions/cargar.js");
const readF = require("./functions/read.js");
const deleteF = require("./functions/delete.js");
const updateF = require("./functions/update.js");

switch (process.argv[2]) {
    case "leer":
        console.log(readF());
        break;
    
    case "cargar":
        console.log(cargarF(process.argv[3], process.argv[4], process.argv[5], process.argv[6]));
        break;

    case "editar":
        console.log(updateF(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]));
        break;   
        
    case "borrar":
        console.log(deleteF(process.argv[3]));
        break;

    default:
        console.log("Comando no valido");
        break;
}
