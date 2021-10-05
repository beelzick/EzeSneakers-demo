require('dotenv').config()

const mongoose = require('mongoose')
const Product = require('./Product')
const { createRandomProduct, fakeAdidasNames, fakeNikeNames, fakeReebokNames } = require('./productGenerator')

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(MONGODB_URI, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

const seedDB = async () => {
    await Product.deleteMany({})
    for (let i = 0; i < 125; i++) {
        const randomProduct = createRandomProduct(fakeNikeNames, 'Nike')
        const product = await new Product(randomProduct)
        await product.save()
    }
    for (let i = 0; i < 125; i++) {
        const randomProduct = createRandomProduct(fakeAdidasNames, 'Adidas')
        const product = await new Product(randomProduct)
        await product.save()
    }
    for (let i = 0; i < 125; i++) {
        const randomProduct = createRandomProduct(fakeReebokNames, 'Reebok')
        const product = await new Product(randomProduct)
        await product.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})