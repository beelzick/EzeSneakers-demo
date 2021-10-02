import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NextLink from 'next/link'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import SmallNav from './SmallNav'
import Drawer from '@mui/material/Drawer'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../../../src/navbarMUIstyles';
import DrawerList from './DrawerList';
import NavLinks from './NavLinks'
import { fetchFavorites, selectFavoritesIds } from '../../../redux/slices/favoritesSlice';
import DisabledHeart from './DisabledHeart';
import { selectCartItems } from '../../../redux/slices/cartSlice';
import { totalQty } from '../../../src/navbarHelpers';
import SearchField from './SearchField'
import Box from '@mui/material/Box'
import ShoppingCartBtn from './ShoppingCartBtn';
import FavoritesBtn from './FavoritesBtn';
import LoginDialog from './LoginDialog';

export default function Navbar() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { data: session } = useSession()
    const favoritesIds = useSelector(selectFavoritesIds)
    const cartItems = useSelector(selectCartItems)

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const [drawerState, setDrawerState] = useState(false);

    useEffect(() => {
        if (session) {
            dispatch(fetchFavorites())
        }
    }, [session, dispatch])

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState(open);
    };

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

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <DrawerList />
        </div>
    );

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
            <NextLink href='/favorites' passHref>
                <MenuItem>
                    <IconButton color='inherit' aria-label='favorites' size="large">
                        <Badge classes={{ badge: classes.customBadge }} badgeContent={favoritesIds.length} color='error'>
                            <FavoriteIcon />
                        </Badge>
                    </IconButton>
                    <p>Favorites</p>
                </MenuItem>
            </NextLink>

            <NextLink href='/cart' passHref>
                <MenuItem>
                    <IconButton color='inherit' aria-label='shopping cart' size="large">
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
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        size="large">
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
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                            size="large">
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            EzeSneakers
                        </Typography>
                        <div style={{ flexGrow: 1.655 }} />
                        <NavLinks />
                        <div className='grow' />
                        <SearchField />
                        <div className={classes.sectionDesktop}>
                            {session ? (<FavoritesBtn favQty={favoritesIds.length} />) : <DisabledHeart />}
                            <ShoppingCartBtn totalQty={totalQty(cartItems)} />
                            {session && (
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                    size="large">
                                    <AccountCircle />
                                </IconButton>
                            )}
                        </div>
                        {session ? (
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls='menu-mobile'
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                    size="large">
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        ) : (
                            <Box sx={{ display: { md: 'none' } }}><ShoppingCartBtn totalQty={totalQty(cartItems)} /></Box>
                        )}

                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
                <Drawer anchor={'left'} open={drawerState} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
                <LoginDialog />
            </div>
        </>
    )
}