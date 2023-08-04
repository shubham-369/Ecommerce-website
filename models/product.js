

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
}
module.exports = Product;
