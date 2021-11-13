import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NextLink from 'next/link'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import SmallNav from './SmallNav/SmallNav'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../../../helpers/navbarMUIstyles';
import NavLinks from './NavLinks/NavLinks'
import { fetchFavorites, selectFavoritesIds } from '../../../redux/slices/favoritesSlice';
import DisabledHeart from './DisabledHeart/DisabledHeart';
import DisabledHeartMobile from './DisabledHeart/DisabledHeartMobile'
import { selectCartItems } from '../../../redux/slices/cartSlice';
import { totalQty } from '../../../helpers/navbarHelpers';
import SearchField from './Search/SearchField'
import Box from '@mui/material/Box'
import ShoppingCartBtn from './ShoppingCartBtn';
import FavoritesBtn from './FavoritesBtn';
import LoginDialog from './LoginDialog';
import styles from './Navbar.module.css'
import SelectionMenus from './SelectionMenus/SelectionsMenus';
import { setDrawerState } from '../../../redux/slices/drawerSlice';
import DrawerNav from '../../Drawer/DrawerNav';
import SearchIcon from '@mui/icons-material/Search';
import { setSearchOpen, selectSearchOpen } from '../../../redux/slices/searchDialogSlice';
import NavbarContainer from './NavbarContainer';


export default function Navbar() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { data: session } = useSession()
    const favoritesIds = useSelector(selectFavoritesIds)
    const cartItems = useSelector(selectCartItems)
    const searchOpen = useSelector(selectSearchOpen)
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [searchIconDisabled, setSearchIconDisabled] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        dispatch(setDrawerState(open))
    };

    useEffect(() => {
        if (searchOpen) {
            setSearchIconDisabled(true)
        } else {
            setSearchIconDisabled(false)
        }
    }, [searchOpen])

    useEffect(() => {
        if (session) {
            dispatch(fetchFavorites())
        }
    }, [session, dispatch])

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleSearchIconClick = () => {
        dispatch(setSearchOpen(true))
    }

    const menuId = 'account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <NextLink href='/change-password' passHref>
                <MenuItem onClick={handleMenuClose}>Change password</MenuItem>
            </NextLink>
        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id='menu-mobile'
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {session ? (
                <NextLink href='/favorites' passHref>
                    <MenuItem>
                        <IconButton color='inherit' size='large' aria-label='favorites'>
                            <Badge classes={{ badge: classes.customBadge }} badgeContent={favoritesIds.length} color='error'>
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
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
            {session && (
                <MenuItem onClick={handleProfileMenuOpen}>
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
    );

    return (
        <>
            <SmallNav />
            <NavbarContainer>
                <IconButton
                    edge='start'
                    className={styles.menuButton}
                    color='inherit'
                    aria-label='open drawer'
                    onClick={toggleDrawer(true)}
                    size='large'>
                    <MenuIcon />
                </IconButton>
                <NextLink href='/' passHref>
                    <Link className={classes.title} variant='h6' noWrap color='secondary' underline='none'>
                        EzeSneakers
                    </Link>
                </NextLink>
                <div style={{ flexGrow: 1.655 }} />
                <NavLinks />
                <div className='grow' />
                <SearchField />
                <IconButton onClick={handleSearchIconClick} disabled={searchIconDisabled}>
                    <SearchIcon
                        sx={{ fontSize: '27px', color: 'white' }}
                        className={styles.mobileSearchIcon}
                    />
                </IconButton>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {session ? (<FavoritesBtn favQty={favoritesIds.length} />) : <DisabledHeart />}
                    <ShoppingCartBtn totalQty={totalQty(cartItems)} />
                    {session && (
                        <IconButton
                            edge='end'
                            aria-label='account of current user'
                            aria-controls={menuId}
                            aria-haspopup='true'
                            onClick={handleProfileMenuOpen}
                            color='inherit'
                            size='large'>
                            <AccountCircle />
                        </IconButton>
                    )}
                </Box>
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton
                        aria-label='show more'
                        aria-controls='menu-mobile'
                        aria-haspopup='true'
                        onClick={handleMobileMenuOpen}
                        color='inherit'
                        size='large'>
                        <MoreIcon />
                    </IconButton>
                </Box>
            </NavbarContainer>
            {renderMobileMenu}
            {renderMenu}
            <LoginDialog />
            <DrawerNav />
            <SelectionMenus />
        </>
    )
}