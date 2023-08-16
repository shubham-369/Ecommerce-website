const express = require("express");
const app = express();
const path = require('path');
const dirname = require('./util/path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({extended:true}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error');


app.use(express.static(path.join(dirname, 'views')));
app.use(express.static(path.join(dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('*', errorRoutes);


const port =  process.env.PORT || 4500;

sequelize
.sync()
.then(() => {
    app.listen(port);
})
.catch((err) => console.log('Server not running : ',err));