import MenuContainer from './MenuContainer/MenuContainer';
import { useSelector } from 'react-redux';
import SelectionMenuSection from './SelectionMenuSection';
import { v4 as uuidv4 } from 'uuid'

export default function SelectionMenu({ setMenuFunction, selectionLinks, selectMenuFunction, fixed }) {
    const isSelected = useSelector(selectMenuFunction)
    return (
        <>
            {isSelected && (
                <MenuContainer setMenuFunction={setMenuFunction} fixed={fixed}>
                    {selectionLinks.map(({ links, title, linkStart }) => (
                        <SelectionMenuSection
                            links={links}
                            title={title}
                            linkStart={linkStart}
                            key={uuidv4}
                        />
                    ))}
                </MenuContainer>
            )}
        </>
    )
}