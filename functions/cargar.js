const readF = require("./read.js");
const writeF = require("./write.js");

const cargarF = (brand = "null", model = "null", year = "null", price = "null") => {
    let data = readF();
     let obj = {
        id: data.length + 1,
        brand: brand,
        model: model,
        year: parseInt(year),
        price: price,
        };
    
    let data_tmp = data.concat(obj); 
    writeF(data_tmp);

    return data_tmp;
    };

module.exports = cargarF;


