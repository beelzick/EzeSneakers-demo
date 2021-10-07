import MenuMen from './selection-menus/MenuMen'
import MenuWomen from './selection-menus/MenuWomen'
import MenuNew from './selection-menus/MenuNew'
import MenuSeason from './selection-menus/MenuSeason'

import { useSelector } from 'react-redux'
import {
    selectMenuMen,
    selectMenuNew,
    selectMenuSeason,
    selectMenuWomen,
} from '../../../redux/slices/selectionMenusSlice'

export default function SelectionMenus() {
    const menuMen = useSelector(selectMenuMen)
    const menuWomen = useSelector(selectMenuWomen)
    const menuNew = useSelector(selectMenuNew)
    const menuSeason = useSelector(selectMenuSeason)

    return <>
        {menuMen && <MenuMen />}
        {menuWomen && <MenuWomen />}
        {menuNew && <MenuNew />}
        {menuSeason && <MenuSeason />}
    </>
}