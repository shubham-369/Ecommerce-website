

class Product {
    constructor(title, page) {
        this.title = title;
        this.page = page;
    }
    show(){
        return {
            Product : this.title, 
            PageNo : this.page
        };
    }
}
module.exports = Product;
