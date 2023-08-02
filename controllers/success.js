const path = require('path');
const filled = path.join(__dirname,'..' , 'views', 'success.html');

const success = async (req, res) =>{
    await res.sendFile(filled);
}

module.exports = success;