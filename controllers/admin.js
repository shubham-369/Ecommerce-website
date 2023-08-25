const product = require('../models/product');

exports.addUpdateProducts = (req, res, next) => {
    const { productID, title, url, price, description } = req.body;
    if (productID) {
        product.findByPk(productID)
        .then(product => {
            product.title = title;
            product.imageurl = url;
            product.price = price;
            product.description = description;
            return product.save();
        })
        .then(() => {
            res.redirect('/admin/admin-product');
        })
        .catch(error => {
            console.error('Error saving product by id:', error);
            res.status(500).render('error', { pageTitle: 'Internal Server Error' });
        });
    }else {
        req.user
        .createProduct({
            title: title,
            imageurl: url,
            price: price,
            description: description
        })
        .then(() => {
            res.redirect('/admin/add-product');
        })
        .catch(err => {
            console.log(`error while saving product : ${err}`);
            res.status(500).render('error', { pageTitle: 'Internal Server Error' });
        });
    }
};


exports.fetchByID = (req, res, next) => {
    const id = req.query.updateID;
    if(id){
        req.user
        .getProducts({where:{id:id}})
        .then(data => {
            res.render('admin/add-product', {
                IDdata: data[0],
                pageTitle: 'Add / Update product',
                path: '/add-product'
            });
        })
        .catch(error => {
            console.error('Error fetching products by id:', error);
            res.status(500).render('error', { pageTitle: 'Internal Server Error' });
        });
    }else{
        res.render('admin/add-product', {
            IDdata: null,
            pageTitle: 'Add / Update product',
            path: 'add-product'
        });
    }
};

exports.getProducts = (req, res, next) => {
    req.user.getProducts()
        .then(data => {
            res.render('admin/admin-product', { 
                prods: data,
                pageTitle: 'Admin Product',
                path:'/admin-product'
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            res.status(500).render('error', { pageTitle: 'Internal Server Error' });
        });
};

exports.deleteByID = (req, res, next) => {
    const id = req.params.deleteID;
    product.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/admin/admin-product');
        })
        .catch(error => {
            res.status(500).render('error', { pageTitle: 'Internal Server Error' });
        });
};
