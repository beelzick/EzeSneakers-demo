import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavorites } from '../../../redux/slices/favoritesSlice';
import LoginDialog from './LoginDialog';
import SelectionMenus from './SelectionMenus/SelectionsMenus';
import DrawerNav from '../../Drawer/DrawerNav';
import NavbarContainer from './NavbarContainer/NavbarContainer';
import MenuDeskopt from './RightSideMenu/MenuDeskopt';
import MenuMobile from './RightSideMenu/Mobile/MenuMobile';
import NavbarContent from './NavbarContent';
import { useSession } from 'next-auth/react';

export default function Navbar() {
    const dispatch = useDispatch()
    const { status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            dispatch(fetchFavorites())
        }
    }, [status, dispatch])

    return (
        <>
            <NavbarContainer>
                <NavbarContent status={status} />
            </NavbarContainer>
            <MenuMobile />
            <MenuDeskopt />
            <LoginDialog />
            <DrawerNav />
            <SelectionMenus />
        </>
    )
}