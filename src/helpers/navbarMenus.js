import {
    setMenuMen,
    setMenuNew,
    setMenuSeason,
    setMenuWomen,
    selectMenuMen,
    selectMenuNew,
    selectMenuSeason,
    selectMenuWomen
} from '../redux/slices/selectionMenusSlice'
const women = '/sneakers/women/'
const men = '/sneakers/men/'

export const processLinkContent = (link) => {
    return link.replace('-', ' ').split('/')[0]
}

const navbarMenus = [
    {
        selectMenuFunction: selectMenuWomen,
        setMenuFunction: setMenuWomen,
        selectionLinks: [
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
            }
        ]
    },
    {
        selectMenuFunction: selectMenuMen,
        setMenuFunction: setMenuMen,
        selectionLinks: [
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
    },
    {
        selectMenuFunction: selectMenuSeason,
        setMenuFunction: setMenuSeason,
        selectionLinks: [
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
    },
    {
        selectMenuFunction: selectMenuNew,
        setMenuFunction: setMenuNew,
        selectionLinks: [
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
            }
        ]
    }
]

export default navbarMenus