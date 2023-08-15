const path = require('path');
const product = require('../models/product');
const addProduct = path.join(__dirname, '..', 'views' , 'admin', 'add-product.html');
const adminproduct = path.join(__dirname, '..', 'views', 'admin', 'admin-product.html');


exports.addUpdateProducts = async (req, res) =>{
    const {productID,title, url, price, description} = req.body;
    try{
        if (productID) {
            const nObj = new product(title, url, price, description); 
            await nObj.updateByID(productID);
            res.redirect('/admin/admin-product.html');
        }
        else{
            const newObj  = new product(title, url, price, description);
            await newObj.save();
            res.redirect('/admin/add-product.html');
        }
    }
    catch (error){
        console.log(error);
        res.status(500).json({error : 'Internal server error'})
    }
}
exports.findByID = async(req, res) =>{
    const prodID = req.params.productID;
    try{
        res.redirect(`/admin/add-product.html?productID=${prodID}`);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}
exports.fetchByID = async(req, res) =>{
    const id = req.query.productID;    
    try {
        const data = await product.findById(id);
        res.json(data);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
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

exports.deleteByID = async (req, res) => {
    const id = req.params.productID;
    try{
        await product.deleteById(id);
        res.redirect('/admin/admin-product.html');
    }
    catch{
        res.status(500).json({error: 'Internal server error'});
    }
}