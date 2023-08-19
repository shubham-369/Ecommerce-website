const express = require("express");
const app = express();
const path = require('path');
const dirname = require('./util/path');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

app.use(express.urlencoded({extended:true}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error');


app.use(express.static(path.join(dirname, 'views')));
app.use(express.static(path.join(dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch((error) => console.log(error));

});

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('*', errorRoutes);

Product.belongsTo(User, {constraints:true, onDelete:'CASCADE'});
User.hasMany(Product);

const port =  process.env.PORT || 4500;
sequelize
.sync()
.then(() => {
    return User.findByPk(1);
})
.then((user) => {
    if(!user){
        User.create({name:"name1", email:"test1@gmail.com"});
    }else{
        return user;
    }
})
.then(() => {
    app.listen(port);
})
.catch((err) => console.log('Server not running : ',err));