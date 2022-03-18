import { useEffect, useState } from 'react';
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
import { CSSTransition } from 'react-transition-group'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import styles from './NavbarContainer/NavbarContainer.module.css';

export default function Navbar() {
    const trigger = useScrollTrigger({threshold: 200})
    const dispatch = useDispatch()
    const { status } = useSession()
    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
    const visibleWindow = typeof window !== 'undefined' ? window : null

    useEffect(() => {
        const changeBackground = () => {
          if (visibleWindow?.scrollY >= 400) {
            setIsNavbarScrolled(true)
          } else {
            setIsNavbarScrolled(false)
          }
        }
    
        visibleWindow.addEventListener('scroll', changeBackground)
        return () => visibleWindow.removeEventListener('scroll', changeBackground)
      }, [visibleWindow])
    
    useEffect(() => {
        if (status === 'authenticated') {
            dispatch(fetchFavorites())
        }
    }, [status, dispatch])

    return (
        <>
            <NavbarContainer>
                <NavbarContent status={status} />
                <SelectionMenus />             
            </NavbarContainer>
            <MenuMobile />
            <MenuDeskopt />
            <LoginDialog />
            <DrawerNav />
            <CSSTransition in={!trigger && isNavbarScrolled} timeout={300} unmountOnExit classNames='navbar-slide'>
              <div className={styles.toolbarFixed}>
                <NavbarContent status={status} />
                <SelectionMenus fixed />  
              </div>
            </CSSTransition>
        </>
    )
}