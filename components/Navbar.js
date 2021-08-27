import { makeStyles } from '@material-ui/core/styles';
import styles from './navbar.module.css'
import { IconButton, Hidden, Button, Typography, AppBar, Toolbar, InputBase, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    control: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#f8f9fa',
        '&:hover': {
            backgroundColor: '#dee2e6'
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
        color: 'gray'
    },
    inputInput: {
        color: 'gray',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Navabr() {
    const classes = useStyles();
    return <>
        <div className={styles.grow}>
            <AppBar position="static">
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
                        <Link href='/men' passHref>
                            <Button size='large' color='inherit' className={classes.control}>men</Button>
                        </Link>
                        <Link href='/women' passHref>
                            <Button size='large' color='inherit' className={classes.control}>women</Button>
                        </Link>
                        <Link href='/new' passHref>
                            <Button size='large' color='inherit' className={classes.control}>new</Button>
                        </Link>
                        <Link href='/summer' passHref>
                            <Button size='large' color='inherit' className={classes.control}>summer</Button>
                        </Link>
                        <Link href='/all' passHref>
                            <Button size='large' color='inherit' className={classes.control}>All</Button>
                        </Link>
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
                    <IconButton color='inherit' aria-label='favorites'>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton color='inherit' aria-label='shopping cart'>
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    </>
}