export const filtersInitialState = {
    collection: {
        featured: false,
        new: false,
        mostRated: false,
        womenLove: false,
    },
    season: {
        spring: false,
        summer: false,
        autumn: false,
        winter: false,
    },
    brand: {
        nike: false,
        adidas: false,
        reebok: false
    }
}

export const accordionExpandedInitialState = {
    gender: true,
    collection: true,
    season: true,
    brand: true
}