import Drawer from '@mui/material/Drawer'
import { setDrawerState, selectDrawerOpen } from '../../redux/slices/drawerSlice';
import { useSelector, useDispatch } from 'react-redux';
import AllPanels from './AllPanels';
import {
    setMainClass,
    setSeasonClass,
    setMenClass,
    setWomenClass,
    setNewClass
} from '../../redux/slices/drawerClassSlice';
import { useEffect } from 'react';
import { setAllClasses } from '../../redux/slices/drawerCategoryClassSlice';
import AllCategories from './categories/AllCategories';
export default function DrawerNav() {
    const dispatch = useDispatch()
    const drawerOpen = useSelector(selectDrawerOpen)

    useEffect(() => {
        if (!drawerOpen) {
            setTimeout(() => {
                dispatch(setMainClass('mid'))
                dispatch(setWomenClass('right'))
                dispatch(setMenClass('right'))
                dispatch(setNewClass('right'))
                dispatch(setSeasonClass('right'))
                dispatch(setAllClasses())
            }, 250)
        }
    }, [drawerOpen, dispatch])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        dispatch(setDrawerState(open));
    };

    return (
        <Drawer
            anchor={'left'}
            open={drawerOpen}
            onClose={toggleDrawer(false)}

        >
            <div
                style={{ width: '300px', height: '100%', overscrollBehaviorX: 'none' }}
                role='presentation'
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <AllPanels />
                <AllCategories />
            </div>
        </Drawer>
    )
}