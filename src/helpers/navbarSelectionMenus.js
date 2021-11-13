const women = '/sneakers/women/'
const men = '/sneakers/men/'

export const selectionMenuWomenLinks = [
    {
        links: ['adidas', 'nike', 'puma'],
        title: 'brand',
        linkStart: women
    },
    {
        links: ['featured', 'new', 'most-rated', 'women-love'],
        title: 'collection',
        linkStart: women,
    },
    {
        links: ['spring', 'summer', 'autumn', 'winter'],
        title: 'season',
        linkStart: women,
    },
    {
        links: ['training', 'outdoor', 'street'],
        title: 'for',
        linkStart: women,
    },
]

export const selectionMenLinks = [
    {
        links: ['adidas', 'nike', 'puma'],
        title: 'brand',
        linkStart: men
    },
    {
        links: ['featured', 'new', 'most-rated'],
        title: 'collection',
        linkStart: men,
    },
    {
        links: ['spring', 'summer', 'autumn', 'winter'],
        title: 'season',
        linkStart: men,
    },
    {
        links: ['training', 'outdoor', 'street'],
        title: 'for',
        linkStart: men,
    },
]

export const selectionSeasonLinks = [
    {
        links: ['spring', 'summer', 'autumn', 'winter'],
        title: 'women',
        linkStart: '/sneakers/women/'
    },
    {
        links: ['spring', 'summer', 'autumn', 'winter'],
        title: 'men',
        linkStart: '/sneakers/men/',
    },
]

export const selectionNewLinks = [
    {
        links: ['adidas', 'nike', 'puma'],
        title: 'brand',
        linkStart: '/sneakers/new/'
    },
    {
        links: ['autumn', 'winter'],
        title: 'season',
        linkStart: '/sneakers/new/',
    },
    {
        links: ['women/new', 'men/new'],
        title: 'gender',
        linkStart: '/sneakers/',
    },
]