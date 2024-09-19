const readF = require("./read.js");
const writeF = require("./write.js");

const updateF = (id = "null", brand = "null", model = "null", year = "null", price = "null") => 
    {
    let data = readF();
    data[id - 1] = {
        id: id, 
        brand: brand,
        model: model,
        year: year,
        price: price
    };

    writeF(data);
    return data;
    };

module.exports = updateF;
