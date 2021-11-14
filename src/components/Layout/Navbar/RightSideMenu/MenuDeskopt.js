import NextLink from 'next/link'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useContext } from 'react';
import { NavbarContext } from '../../Layout';

export default function MenuDeskopt() {
    const { anchorEl, setAnchorEl, setMobileMoreAnchorEl } = useContext(NavbarContext)
    
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMoreAnchorEl(null);
    };

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id='account-menu'
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <NextLink href='/change-password' passHref>
                <MenuItem onClick={handleMenuClose}>Change password</MenuItem>
            </NextLink>
        </Menu>
    )
}