const path = require('path');
const shopping = path.join(__dirname,'..' , 'views', 'shop.html');

const shop = async (req, res) =>{
    await res.sendFile(shopping);
}

module.exports = shop;