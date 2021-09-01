require('dotenv').config()

const mongoose = require('mongoose')
const Product = require('./Product')
const { createRandomProduct, fakeAdidasNames, fakeNikeNames, fakeReebokNames } = require('./productGenerator')

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(MONGODB_URI, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

const seedDB = async () => {
    await Product.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const randomProduct = await createRandomProduct(fakeNikeNames, 'Nike')
        const product = await new Product(randomProduct)
        await product.save()
    }
    for (let i = 0; i < 50; i++) {
        const randomProduct = await createRandomProduct(fakeAdidasNames, 'Adidas')
        const product = await new Product(randomProduct)
        await product.save()
    }
    for (let i = 0; i < 50; i++) {
        const randomProduct = await createRandomProduct(fakeReebokNames, 'Reebok')
        const product = await new Product(randomProduct)
        await product.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})