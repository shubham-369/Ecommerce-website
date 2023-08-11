const path = require('path');
const product = require('../models/product');
const addProduct = path.join(__dirname,'..' , 'views', 'admin', 'add-product.html');
const adminproduct = path.join(__dirname, '..', 'views', 'admin', 'admin-product.html');

exports.addProducts = async (req, res) =>{
    try{
        const {title, url, price, description} = req.body;
        const newObj  = new product(title, url, price, description);
        await newObj.save();
        res.redirect('/admin/add-product.html');
    }
    catch (error){
        console.log(error);
        res.status(500).json({error : 'Internal server error'})
    }
}

exports.adminProduct = async(req, res) =>{
    await res.sendFile(adminproduct);
}

exports.getProducts = async (req, res) => {
    try {
        const products = await product.fetchAll();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}