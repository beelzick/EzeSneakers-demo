import styles from '../navbar/navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer'
import { useState } from 'react';
import useStyles from '../../../src/navbarMUIstyles';
import DrawerList from '../navbar/DrawerList';
import NavLinks from '../navbar/NavLinks'
import SearchField from './SearchField'

export default function Navbar() {
    const classes = useStyles();

    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState(open);
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

    return <>
        <div className='grow'>
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
                    <Typography className={classes.title} variant="h6">
                        EzeSneakers
                    </Typography>
                    <div style={{ flexGrow: 1.3 }} />
                    <NavLinks />
                    <div className='grow' />

                    <SearchField />

                </Toolbar>
            </AppBar>
            <Drawer anchor={'left'} open={drawerState} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    </>;
}