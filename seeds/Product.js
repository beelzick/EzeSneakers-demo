const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imgUrl: String,
    description: String,
    tag: String || null,
    addDate: Date,
    sex: String,
    rating: Number,
    sizes: [
        {
            size: Number,
            qty: Number,
        }
    ],
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema)
