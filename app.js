const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');


app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(adminRoutes);
app.use(userRoutes);
app.use(contactRoutes);
app.use(successRoutes);


const errorPath = path.join(__dirname, 'views', '404-error.html');
app.use('*',(req, res, )=>{
    res.status(404).sendFile(errorPath);
});

const port =  process.env.port || 4500;
app.listen(port);