describe('add product', () => {
    it('user can log in add product', () => {
        pages.map(page => {
            cy.visit(page)
        })
    })
})

const pages = [
    '/sneakers',
    '/',
    '/favorites',
    '/cart',
    'about',
    '/sneakers/new',
    '/sneakers/men', //men
    '/sneakers/men/featured',
    '/sneakers/men/new',
    '/sneakers/men/most-rated',
    '/sneakers/men/spring',
    '/sneakers/men/summer',
    '/sneakers/men/autumn',
    '/sneakers/men/winter',
    '/sneakers/men/nike',
    '/sneakers/men/adidas',
    '/sneakers/men/puma',
    '/sneakers/men/training',
    '/sneakers/men/outdoor',
    '/sneakers/men/street',
    '/sneakers/women', //women
    '/sneakers/women/featured',
    '/sneakers/women/new',
    '/sneakers/women/most-rated',
    '/sneakers/women/spring',
    '/sneakers/women/summer',
    '/sneakers/women/autumn',
    '/sneakers/women/winter',
    '/sneakers/women/nike',
    '/sneakers/women/adidas',
    '/sneakers/women/puma',
    '/sneakers/women/training',
    '/sneakers/women/outdoor',
    '/sneakers/women/street',
    '/sneakers/women/women-love',
    '/sneakers/season', //season
    '/sneakers/new', //new
    '/sneakers/new/autumn',
    '/sneakers/new/winter',
    '/sneakers/new/nike',
    '/sneakers/new/adidas',
    '/sneakers/new/puma',
]