const product = require('../models/product');

exports.addUpdateProducts = (req, res) => {
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
            res.redirect('/admin/admin-product.html');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error!' });
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
            res.redirect('/admin/add-product.html');
        })
        .catch(err => {
            console.log(`error while saving data : ${err}`);
            res.status(500).json({ error: 'Internal server error' });
        });
    }
};

exports.findByID = (req, res) => {
    const prodID = req.params.productID;
    try {
        res.redirect(`/admin/add-product.html?productID=${prodID}`);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.fetchByID = (req, res) => {
    const id = req.query.productID;
    if(id){
        req.user
        .getProducts({where:{id:id}})
        .then(data => {
            res.json(data[0].dataValues);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        });
    }
};

exports.getProducts = (req, res) => {
    req.user.getProducts()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
};

exports.deleteByID = (req, res) => {
    const id = req.params.productID;
    product.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/admin/admin-product.html');
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal server error', error });
        });
};
