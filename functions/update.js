const readF = require("./read.js");
const writeF = require("./write.js");

const updateF = (id = "null", brand = "null", model = "null", year = "null", price = "null") => 
    {
    let data = readF();
    console.log(data);
    data[id - 1] = {
        id: parseInt(id), 
        brand: brand,
        model: model,
        year: parseInt(year),
        price: price
    };

    writeF(data);
    return data;
    };

module.exports = updateF;
