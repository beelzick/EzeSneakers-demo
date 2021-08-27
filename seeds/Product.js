const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number,
    imgUrl: String,
    description: String,
    tag: String,
    addDate: Date,
    sex: String,
    rating: Number
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema)
