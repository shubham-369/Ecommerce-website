const path = require('path');
const addProduct = path.join(__dirname,'..' , 'views', 'add-product.html');

const products = async (req, res) =>{
    await res.sendFile(addProduct);
}

module.exports = products;