import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NextLink from 'next/link'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DisabledHeartMobile from '../../DisabledHeart/DisabledHeartMobile'
import { totalQty } from '../../../../../helpers/navbarHelpers';
import { useContext } from 'react';
import { NavbarContext } from '../../../Layout';
import useStyles from '../../../../../helpers/navbarMUIstyles';
import { selectCartItems } from '../../../../../redux/slices/cartSlice';
import { useSelector } from 'react-redux';
import { selectFavoritesIds } from '../../../../../redux/slices/favoritesSlice';
import { useSession } from 'next-auth/react'

export default function MenuMobile() {
    const { data: status } = useSession()
    const classes = useStyles();
    const { setMobileMoreAnchorEl, mobileMoreAnchorEl, setAnchorEl } = useContext(NavbarContext)
    const isMenuOpen = Boolean(mobileMoreAnchorEl);
    const favoritesIds = useSelector(selectFavoritesIds)
    const cartItems = useSelector(selectCartItems)

    const handleClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id='menu-mobile'
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleClose}
        >
            {status === 'authenticated' ? (
                <NextLink href='/favorites' passHref>
                    <MenuItem>
                        <IconButton color='inherit' size='large' aria-label='favorites'>
                            <Badge classes={{ badge: classes.customBadge }} badgeContent={favoritesIds.length} color='error'>
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                        <p>Favorites</p>
                    </MenuItem>
                </NextLink>
            ) : (
                <DisabledHeartMobile />
            )}
            <NextLink href='/cart' passHref>
                <MenuItem>
                    <IconButton color='inherit' aria-label='shopping cart' size='large'>
                        <Badge classes={{ badge: classes.customBadge }} badgeContent={totalQty(cartItems)} color='error'>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <p>Cart</p>
                </MenuItem>
            </NextLink>
            {status === 'authenticated' && (
                <MenuItem onClick={handleClick}>
                    <IconButton
                        aria-label='account of current user'
                        aria-controls='primary-search-account-menu'
                        aria-haspopup='true'
                        color='inherit'
                        size='large'>
                        <AccountCircle />
                    </IconButton>
                    <p>Account</p>
                </MenuItem>
            )}
        </Menu>
    )
}