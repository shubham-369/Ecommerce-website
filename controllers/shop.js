const product = require('../models/product');


exports.success = (req, res, next) => {
    res.render('shop/success', {
        pageTitle: 'Success',
        path: '/success' 
    });
}

exports.contact = (req, res, next) => {
    res.render('shop/contact', {
        pageTitle: 'Contact Us',
        path: '/contact' 
    });
}

exports.showProducts = (req, res, next) => {
    product.findAll()
    .then((data) => {
        res.render('shop/shop', {
            prods: data,
            pageTitle: 'Shop products',
            path: '/shop'
        });
    })
    .catch((error) => {
        console.log('error while fetching shop products :', error);
        res.status(500).render('error', { pageTitle: 'Internal server error'});
    })
}

exports.productDetails = (req, res, next) => {
    const id = req.query.detailID;
    if(id){
        product.findAll({where:{id:id}})
        .then((data) => {
            res.render('shop/products', {
                detail: data[0],
                pageTitle: 'Product detail',
                path:'/products'
            });
        })
        .catch((error) => {
            console.log('error while fetching product details :', error);
            res.status(500).render('error', { pageTitle: 'Internal server error'});
        })
    }
}