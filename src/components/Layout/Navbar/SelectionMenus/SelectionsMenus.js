import navbarMenus from '../../../../helpers/navbarMenus'
import SelectionMenu from './SelectionMenu'
import { v4 as uuidv4 } from 'uuid'

export default function SelectionMenus() {
    return (
        <>
            {navbarMenus.map(({ selectMenuFunction, setMenuFunction, selectionLinks }) => (
                <SelectionMenu
                    selectMenuFunction={selectMenuFunction}
                    setMenuFunction={setMenuFunction}
                    selectionLinks={selectionLinks}
                    key={uuidv4}
                />
            ))}
        </>
    )
}