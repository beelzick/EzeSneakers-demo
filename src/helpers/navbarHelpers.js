import {
    setMenuMen,
    setMenuWomen,
    setMenuSeason,
    setMenuNew
} from '../redux/slices/selectionMenusSlice'

export const totalQty = itemsArray => {
    return itemsArray.reduce((allTotal, item) => {
        const sum = item.selectedSizes.reduce((total, size) => {
            return total + size.qty
        }, 0)
        return allTotal + sum
    }, 0)
}

export const totalPrice = itemsArray => {
    return itemsArray.reduce((allTotal, item) => {
        const sum = item.selectedSizes.reduce((total, size) => {
            return total + size.qty
        }, 0)
        return allTotal + (sum * item.price)
    }, 0)
}

export const navLinksData = [
    {
        func: setMenuWomen,
        link: 'women'
    },
    {
        func: setMenuMen,
        link: 'men'
    },
    {
        func: setMenuNew,
        link: 'new'
    },
    {
        func: setMenuSeason,
        link: 'season'
    },
]