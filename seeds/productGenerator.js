//product object generator

module.exports.createRandomProduct = (fakeNamesArray, sneakerBrand) => {
    const randArrEl = array => array[Math.floor(Math.random() * array.length)]
    const fiftyChance = () => Math.floor(Math.random() * 2)
    const randomModelNum = Math.floor(1 + Math.random() * 10) * 100
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    const randomNumFromInterval = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    class SneakerSize {
        constructor(size) {
            this.size = size
            this.qty = (Math.random() < 0.85) ? randomNumFromInterval(10, 350) : 0
        }
    }

    const product = {}
    let generatedName

    if (sneakerBrand === 'Nike') {
        generatedName = `${sneakerBrand} ${fiftyChance() ? 'Air Max' : ''} ${randArrEl(fakeNamesArray)} ${fiftyChance() ? randomModelNum : ''}`
    } else {
        generatedName = `${sneakerBrand} ${randArrEl(fakeNamesArray)} ${fiftyChance() ? randomModelNum : ''}`
    }

    product.name = generatedName.replace(/\s+/g, ' ').trim()
    product.price = (Math.floor(1 + Math.random() * 10) * 10 + 39) + (fiftyChance() ? 0.59 : 0.99)
    product.imgUrl = 'https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_450/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg'
    product.gender = `${fiftyChance() ? 'man' : 'woman'}`
    product.tags = []

    if (Math.random() < 0.1) {
        fiftyChance() ? product.tag = 'summer' : product.tag = null
        product.rating = Math.random() * (5 - 4.5) + 4.5
    } else {
        fiftyChance() ? product.tag = 'summer' : product.tag = null
        product.rating = Math.random() * (5 - 3) + 3
    }

    //featured, summer, spring, summer, autumn, winter, w-love, outdoor, training
    if (Math.random() < 0.1) {
        product.tags.push('featured')
    }

    if (product.gender === 'woman' && Math.random() < 0.1) {
        product.tags.push('women love')
    }

    if (Math.random() < 0.15) {
        product.tags.push('training')
    }

    if (Math.random() < 0.1) {
        product.tags.push('outdoor')
    }

    switch (Math.floor(Math.random() * 4)) {
        case 0:
            product.tags.push('summer')
            break;
        case 1:
            product.tags.push('spring')
            break;
        case 2:
            product.tags.push('autumn')
            Math.random() < 0.4 && product.tags.push('winter')
            break;
        case 3:
            product.tags.push('winter')
            Math.random() < 0.4 && product.tags.push('autumn')
            break;
    }

    product.description = lorem.substring(0, randomNumFromInterval(150, 445))

    try {
        product.addDate = new Date(
            randomNumFromInterval(2008, 2021),
            randomNumFromInterval(1, 12),
            randomNumFromInterval(1, 31),
            randomNumFromInterval(8, 16),
            randomNumFromInterval(0, 59),
            randomNumFromInterval(0, 59)
        )
        //if day is not included in month days range
    } catch (error) {
        new Date(
            randomNumFromInterval(2008, 2021),
            randomNumFromInterval(1, 12),
            randomNumFromInterval(1, 15),
            randomNumFromInterval(8, 16),
            randomNumFromInterval(0, 59),
            randomNumFromInterval(0, 59)

        )
    }
    const sizesList = []
    for (i = 0; i < 24; i++) {
        sizesList.push(new SneakerSize(36 + 0.5 * i))
    }
    product.sizes = sizesList
    return product
}

// fake names arrays
module.exports.fakeNikeNames = [
    'Newee',
    'Yersey',
    'New York',
    'Easy',
    'Soft',
    'Nasa',
    'ST',
    'BW',
    'Jordan',
    'Hypervenom',
    'Magista',
    'Mercurial',
    'Phantom',
    'Fleece',
    'Drift',
    'King',
    'Greenee',
    'Zoom',
    'Iron',
    'Pegasus',
    'Alphafly',
    'WildHorse',
    'Free Step',
    'Downshifter',
    'Rival'
]

module.exports.fakeAdidasNames = [
    'Boost',
    'Forum Exhibit',
    'Ultraboost',
    'Dna',
    'Lego',
    'SUPERSTAR',
    'OZWEEGO',
    'Continental',
    'Gazelle',
    'Jogger',
    'Terrex',
    'Forum',
    'Advantage',
    'Handball',
    'Five Ten Sleuth',
    'Hoops',
    'MC Vulc',
    'Fusio',
    'Ozelia',
    'Munchen',
    'Adilette',
    'Falcon',
    'Swift',
    'Breaknet',
    'Duramo'
]

module.exports.fakeReebokNames = [
    'Cross',
    'Pump Fury',
    'Nanoflex',
    'ZigLite Run',
    'RealFlex Transition',
    'RealFlex Run',
    'Ventilator',
    'ZigFly',
    'ZigSlash',
    'ZigPulse',
    'Pump Omni Lite',
    'Pump Running Dual',
    'Classic Leather',
    'Ex-O-Fit',
    'Supercourt',
    'ZigTech Shark',
    'Legacy',
    'Royal Classic',
    'Royal',
    'Juun',
    'Club C',
    'Energy',
    'Nano',
    'Flexagon',
    'Glide',
    'Work N',
    'Energylux',
    'Craze',
    'Ridgerider'
];


