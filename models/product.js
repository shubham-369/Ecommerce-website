const db = require('../util/database');

class Product {
    constructor(title, url, price, desc) {
        this.title = title;
        this.url = url;
        this.price = price;
        this.desc = desc;
    }
    show(){
        return {
            Product : this.title, 
            Url : this.url,
            Price : this.price,
            description : this.desc
        };
    }

    save() {
        const query = 'INSERT INTO `node_complete`.`products` (`title`, `price`, `description`, `imageurl`) VALUES (?, ?, ?, ?)';
        const values = [this.title, this.price, this.desc, this.url];
        return db.execute(query, values)
            .then(() => console.log('data saved to database'))
            .catch(error => {
                throw error;
            });
    }
    static deleteById(id){

    }

    static fetchAll(callback){
        const query = 'SELECT * FROM products';
        return db.execute(query)
          .then(([rows]) => rows)
          .catch(error => {
            throw error;
          });
    }

    static findById(id){

    }
}
module.exports = Product;
