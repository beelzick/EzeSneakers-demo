import { makeStyles, alpha } from '@material-ui/core/styles';
import styles from './navbar.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import NextLink from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import NavBreadcrumbs from './NavBreadcrumbs';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Hidden from '@material-ui/core/Hidden'
import { FaBeer } from '@react-icons/all-files/fa/FaBeer';
import { FaFemale } from '@react-icons/all-files/fa/FaFemale'
import { FaMale } from '@react-icons/all-files/fa/FaMale'
import { MdFiberNew } from '@react-icons/all-files/Md/MdFiberNew'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { GiConverseShoe } from '@react-icons/all-files/gi/GiConverseShoe'
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    customBadge: {
        backgroundColor: 'rgb(239, 71, 111)',
        color: 'white'
    },
    list: {
        width: 250,
    },
}));


export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [drawerState, setDrawerState] = useState(false);

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
            <List>
                <NextLink href='/sneakers/men' passHref>
                    <ListItem button >
                        <ListItemIcon><FaMale fontSize='24' /></ListItemIcon>
                        <ListItemText primary='men' />
                    </ListItem>
                </NextLink>
                <NextLink href='/sneakers/women' passHref>
                    <ListItem button >
                        <ListItemIcon><FaFemale fontSize='24' /></ListItemIcon>
                        <ListItemText primary='women' />
                    </ListItem>
                </NextLink>
                <NextLink href='/sneakers/new' passHref>
                    <ListItem button >
                        <ListItemIcon><MdFiberNew fontSize='24' /></ListItemIcon>
                        <ListItemText primary='new' />
                    </ListItem>
                </NextLink>
                <NextLink href='/sneakers/summer' passHref>
                    <ListItem button >
                        <ListItemIcon><WbSunnyIcon /></ListItemIcon>
                        <ListItemText primary='summer' />
                    </ListItem>
                </NextLink>
                <NextLink href='/sneakers' passHref>
                    <ListItem button >
                        <ListItemIcon><GiConverseShoe fontSize='24' /></ListItemIcon>
                        <ListItemText primary='all sneakers' />
                    </ListItem>
                </NextLink>
            </List>
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
            <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
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
                        <Badge classes={{ badge: classes.customBadge }} badgeContent={1} color='error'>
                            <FavoriteIcon />
                        </Badge>
                    </IconButton>
                    <p>Favorites</p>
                </MenuItem>
            </NextLink>
            <NextLink href='/cart' passHref>
                <MenuItem>
                    <IconButton color='inherit' aria-label='shopping cart'>
                        <Badge classes={{ badge: classes.customBadge }} badgeContent={1} color='error'>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <p>Cart</p>
                </MenuItem>
            </NextLink>
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
        </Menu>
    );
    return <>
        <div className={styles.grow}>
            <div className={styles.smBar}>
                <div>
                    <IconButton size='small' color='secondary'>
                        <GitHubIcon fontSize='small' />
                    </IconButton>
                    <IconButton size='small' color='secondary'>
                        <LinkedInIcon />
                    </IconButton>
                </div>
                <div className={styles.grow}></div>
                <div>
                    <NavBreadcrumbs />
                </div>
            </div>

            <div className={classes.grow}>
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
                        <div className={classes.grow} />
                        <div className={classes.grow} />
                        <Hidden smDown>
                            <Box className={styles.linksBox}>
                                <NextLink href='/sneakers/men' passHref>
                                    <Button size='large' color='inherit' className={classes.control}>men</Button>
                                </NextLink>
                                <NextLink href='/sneakers/women' passHref>
                                    <Button size='large' color='inherit' className={classes.control}>women</Button>
                                </NextLink>
                                <NextLink href='/sneakers/new' passHref>
                                    <Button size='large' color='inherit' className={classes.control}>new</Button>
                                </NextLink>
                                <NextLink href='/sneakers/summer' passHref>
                                    <Button size='large' color='inherit' className={classes.control}>summer</Button>
                                </NextLink>
                                <NextLink href='/sneakers' passHref>
                                    <Button size='large' color='inherit' className={classes.control}>All</Button>
                                </NextLink>
                            </Box>
                        </Hidden>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.sectionDesktop}>
                            <NextLink href='/favorites' passHref>
                                <IconButton color='inherit' aria-label='favorites'>
                                    <Badge classes={{ badge: classes.customBadge }} badgeContent={1} color='error'>
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                            </NextLink>
                            <NextLink href='/cart' passHref>
                                <IconButton color='inherit' aria-label='shopping cart'>
                                    <Badge classes={{ badge: classes.customBadge }} badgeContent={1} color='error'>
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </NextLink>
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


            {/* <AppBar position="static">
                <Toolbar>
                    <Hidden smUp>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" className={styles.grow}>
                        EzeSneakers
                    </Typography>
                    <Box className={styles.linksBox}>
                        <NextLink href='/sneakers/men' passHref>
                            <Button size='large' color='inherit' className={classes.control}>men</Button>
                        </NextLink>
                        <NextLink href='/sneakers/women' passHref>
                            <Button size='large' color='inherit' className={classes.control}>women</Button>
                        </NextLink>
                        <NextLink href='/sneakers/new' passHref>
                            <Button size='large' color='inherit' className={classes.control}>new</Button>
                        </NextLink>
                        <NextLink href='/sneakers/summer' passHref>
                            <Button size='large' color='inherit' className={classes.control}>summer</Button>
                        </NextLink>
                        <NextLink href='/sneakers' passHref>
                            <Button size='large' color='inherit' className={classes.control}>All</Button>
                        </NextLink>
                    </Box>
                    <div className={styles.grow}></div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <NextLink href='/favorites' passHref>
                        <IconButton color='inherit' aria-label='favorites'>
                            <Badge classes={{ badge: classes.customBadge }} badgeContent={1} color='error'>
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                    </NextLink>
                    <NextLink href='/cart' passHref>
                        <IconButton color='inherit' aria-label='shopping cart'>
                            <Badge classes={{ badge: classes.customBadge }} badgeContent={1} color='error'>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </NextLink>
                </Toolbar>
            </AppBar> */}
        </div>
    </>
}