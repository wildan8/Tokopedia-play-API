const mongoose = require('mongoose');
const product = mongoose.model('Product');
const Thumbs = mongoose.model('Thumbs');

exports.getAllProduct = async (req,res) =>{
    try {
        const products = await product.find({ thumbsID: req.params.thumbsID });
        res.json(products);
        console.log(product.find({ thumbsID: req.params.thumbsID }));
    } catch (error) {
        res.status(500).json({message:'fail to GET product data!', error:error})       
    }
}
exports.postProduct = async (req,res) =>{
    const newProd = new product(req.body);
    try {    
            console.log(newProd)
            await newProd.save();        
        res.json({message:'data POST success!'})
    } catch (error) {
        res.status(400).json({message:'fail to POST product data!', error:error})       
    }
}