import styles from './navbar.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NextLink from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import NavBreadcrumbs from './NavBreadcrumbs';
import Drawer from '@material-ui/core/Drawer'
import { useEffect, useState } from 'react';
import Hidden from '@material-ui/core/Hidden'
import { useSession } from 'next-auth/react'
import ColoredLinearProgress from '../../loadings/ColoredLinearProgress';
import { selectIsLoading } from '../../../redux/slices/loadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../../../src/navbarMUIstyles';
import DrawerList from './DrawerList';
import NavLinks from './NavLinks'
import { fetchFavorites, selectFavoritesIds } from '../../../redux/slices/favoritesSlice';
import DisabledHeart from './DisabledHeart';
import { selectCartItems } from '../../../redux/slices/cartSlice';
import { totalQty } from '../../../src/navbarHelpers';
import Search from './Search'


export default function Navbar() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { data: session, status } = useSession()
    const favoritesIds = useSelector(selectFavoritesIds)
    const cartItems = useSelector(selectCartItems)
    const isLoading = useSelector(selectIsLoading)
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [drawerState, setDrawerState] = useState(false);

    useEffect(() => {
        if (session) {
            dispatch(fetchFavorites())
        }
    }, [session])

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

    const menuId = 'primary-search-account-menu';
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

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <NextLink href='/favorites' passHref>
                <MenuItem>
                    <IconButton color='inherit' aria-label='favorites'>
                        <Badge classes={{ badge: classes.customBadge }} badgeContent={favoritesIds.length} color='error'>
                            <FavoriteIcon />
                        </Badge>
                    </IconButton>
                    <p>Favorites</p>
                </MenuItem>
            </NextLink>

            <NextLink href='/cart' passHref>
                <MenuItem>
                    <IconButton color='inherit' aria-label='shopping cart'>
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
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Account</p>
                </MenuItem>
            )}
        </Menu>
    );
    return <>
        <div className='grow'>
            <div className={styles.smBar}>
                <div>
                    <IconButton size='small' color='secondary'>
                        <GitHubIcon fontSize='small' />
                    </IconButton>
                    <IconButton size='small' color='secondary'>
                        <LinkedInIcon />
                    </IconButton>
                </div>
                <div className='grow'></div>
                <div>
                    <NavBreadcrumbs />
                </div>
            </div>

            <div className='grow'>
                <AppBar position="static">
                    <Toolbar>
                        <Hidden mdUp>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography className={classes.title} variant="h6" noWrap>
                            EzeSneakers
                        </Typography>
                        <div className='grow' />
                        <div className='grow' />
                        <Hidden smDown>
                            <NavLinks />
                        </Hidden>
                        <div className='grow' />
                        <Search />
                        <div className={classes.sectionDesktop}>
                            {session ? (<NextLink href='/favorites' passHref>
                                <IconButton color='inherit' aria-label='favorites'>
                                    <Badge classes={{ badge: classes.customBadge }} badgeContent={favoritesIds.length} color='error'>
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                            </NextLink>) : <DisabledHeart />}

                            <NextLink href='/cart' passHref>
                                <IconButton color='inherit' aria-label='shopping cart'>
                                    <Badge classes={{ badge: classes.customBadge }} badgeContent={totalQty(cartItems)} color='error'>
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </NextLink>
                            {status === 'authenticated' && (
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            )}

                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
                <Drawer anchor={'left'} open={drawerState} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </div>
            <div className={styles.progress}>
                {isLoading && <ColoredLinearProgress />}
            </div>

        </div>
    </>
}