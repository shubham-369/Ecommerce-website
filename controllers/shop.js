const path = require('path');
const shopping = path.join(__dirname,'..' , 'views', 'shop.html');
const contactus = path.join(__dirname,'..' , 'views', 'contact.html');
const filled = path.join(__dirname,'..' , 'views', 'success.html');

exports.shop = async (req, res) =>{
    await res.sendFile(shopping);
}
exports.contact = async (req, res) =>{
    await res.sendFile(contactus);
}
exports.success = async (req, res) =>{
    await res.sendFile(filled);
}