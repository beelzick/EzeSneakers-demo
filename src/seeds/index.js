require('dotenv').config()
const nikeUrls = require('./nikeUrls')
const adidasUrls = require('./adidasUrls')
const pumaUrls = require('./pumaUrls')
const mongoose = require('mongoose')
const Product = require('./Product')
const { createRandomProduct, fakeAdidasNames, fakeNikeNames, fakePumaNames } = require('./productGenerator')

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
    for (let i = 0; i < 100; i++) {
        const randomProduct = createRandomProduct(fakeNikeNames, 'Nike')
        const product = await new Product(
            {
                ...randomProduct,
                imgUrl: nikeUrls[i]
            }
        )
        await product.save()
    }

    for (let i = 0; i < 100; i++) {
        const randomProduct = createRandomProduct(fakeAdidasNames, 'Adidas')
        const product = await new Product(
            {
                ...randomProduct,
                imgUrl: adidasUrls[i]
            }
        )
        await product.save()
    }

    for (let i = 0; i < 100; i++) {
        const randomProduct = createRandomProduct(fakePumaNames, 'Puma')
        const product = await new Product(
            {
                ...randomProduct,
                imgUrl: pumaUrls[i]
            }
        )
        await product.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})