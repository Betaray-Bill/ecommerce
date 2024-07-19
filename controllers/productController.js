const Product = require('../models/productModel')

// Get All Products
exports.getProducts = async(req, res) => {
    const products = await Product.find({})

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

// Add New Product
exports.newProduct = async(req, res) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
}

// Get Single Product
exports.getPRoductById = async(req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}

// Update Product
exports.updateProduct = async(req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}

// Delete Product
exports.deleteProduct = async(req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    })

}