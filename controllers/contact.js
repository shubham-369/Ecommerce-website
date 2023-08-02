const path = require('path');
const contactus = path.join(__dirname,'..' , 'views', 'contact.html');

const contact = async (req, res) =>{
    await res.sendFile(contactus);
}

module.exports = contact;