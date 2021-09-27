import { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { selectOpen, setOpen } from '../../../redux/slices/drawerSlice'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const drawerOpen = useSelector(selectOpen)
    const dispatch = useDispatch()

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        dispatch(setOpen(open));
    };

    const list = () => (
        <div
            className={classes.list}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button >
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary='tele' />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>left</Button>
            <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
}