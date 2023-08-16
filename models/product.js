const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('products',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true        
    },
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },
    imageurl : {
        type : Sequelize.STRING,
        allowNull : false
    },
    price : {
        type : Sequelize.DOUBLE,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false
    }
    
});

module.exports = Product;
// class Product {
//     constructor(title, url, price, desc) {
//         this.title = title;
//         this.url = url;
//         this.price = price;
//         this.desc = desc;
//     }
//     show(){
//         return {
//             Product : this.title, 
//             Url : this.url,
//             Price : this.price,
//             description : this.desc
//         };
//     }

//     save() {
//         const query = 'INSERT INTO `node_complete`.`products` (`title`, `price`, `description`, `imageurl`) VALUES (?, ?, ?, ?)';
//         const values = [this.title, this.price, this.desc, this.url];
//         return db.execute(query, values)
//             .then(() => console.log('data saved to database'))
//             .catch(error => {
//                 throw error;
//             });
//     }
//     updateByID(id){
//         const query = 'UPDATE `node_complete`.`products` SET `title` = ?, `price` = ?, `description` = ?, `imageurl` = ? WHERE id =?';
//         const values = [this.title, this.price, this.desc, this.url, id];
//         return db.execute(query, values)
//             .then(() => console.log('data updated successfully'))
//             .catch(error => {
//                 throw error;
//             });
//     }
//     static deleteById(id){
//         const query = 'DELETE FROM `node_complete`.`products` WHERE id =?';
//         return db.execute(query, [id])
//             .then(() => console.log('data deleted successfully'))
//             .catch(error => {
//                 throw error;
//             });
//     }

//     static fetchAll(callback){
//         const query = 'SELECT * FROM products';
//         return db.execute(query)
//           .then(([rows]) => rows)
//           .catch(error => {
//             throw error;
//           });
//     }

//     static findById(id){
//         const query = 'SELECT * FROM products WHERE id = ?';
//         return db.execute(query, [id])
//         .then(([rows]) => rows)
//         .catch(error => {
//             throw error;
//         });
//     }
// }
// module.exports = Product;
