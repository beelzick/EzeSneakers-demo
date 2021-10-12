import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon';
import { FaFemale } from '@react-icons/all-files/fa/FaFemale'
import { FaMale } from '@react-icons/all-files/fa/FaMale'
import { MdFiberNew } from '@react-icons/all-files/md/MdFiberNew'
import NextLink from 'next/link'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { dialogOpen } from '../../../redux/slices/loginDialogSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';
import { IoIosSnow } from '@react-icons/all-files/io/IoIosSnow'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './drawer.module.css'
import {
    setWomenClass,
    selectMainClass,
    setMainClass,
    setMenClass,
    setNewClass,
    setSeasonClass
} from '../../../redux/slices/drawerClassSlice';

export default function PanelMain() {
    const dispatch = useDispatch()
    const { data: session } = useSession()
    const mainClass = useSelector(selectMainClass)

    const handleListItemClick = (listItem) => () => {
        switch (listItem) {
            case 'women':
                dispatch(setWomenClass('mid'))
                break
            case 'men':
                dispatch(setMenClass('mid'))
                break
            case 'new':
                dispatch(setNewClass('mid'))
                break
            case 'season':
                dispatch(setSeasonClass('mid'))
                break
        }
        dispatch(setMainClass('left'))
    }


    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    return <>
        <List
            onClick={stopPropagation}
            sx={{ display: 'flex', flexDirection: 'column', minWidth: '300px', position: 'absolute', height: '100%' }}
            className={(mainClass === 'left' && styles['hide-left']) || (mainClass === 'mid' && styles['mid'])}
        >
            <ListItem

                sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}
                onClick={handleListItemClick('women')}
            >
                <ListItemIcon>
                    <FaFemale fontSize='30' color='black' />
                </ListItemIcon>
                <Typography component='span' variant='h5'>
                    Women
                </Typography>
                <div className='grow' />
                <KeyboardArrowRightIcon fontSize='large' />
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}
                onClick={handleListItemClick('men')}
            >
                <ListItemIcon>
                    <FaMale fontSize='30' color='black' />
                </ListItemIcon>
                <Typography component='span' variant='h5' >
                    Men
                </Typography>
                <div className='grow' />
                <KeyboardArrowRightIcon fontSize='large' />
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}
                onClick={handleListItemClick('new')}
            >
                <ListItemIcon>
                    <MdFiberNew fontSize='30' color='black' />
                </ListItemIcon>
                <Typography component='span' variant='h5'>
                    New
                </Typography>
                <div className='grow' />
                <KeyboardArrowRightIcon fontSize='large' />
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}
                onClick={handleListItemClick('season')}
            >
                <ListItemIcon>
                    <IoIosSnow fontSize='30' color='black' />
                </ListItemIcon>
                <Typography component='span' variant='h5'>
                    Season
                </Typography>
                <div className='grow' />
                <KeyboardArrowRightIcon fontSize='large' />
            </ListItem>
            <div className='grow' />
            <Grid container direction='column' alignItems='center' mb={2}>
                <Box my={2}>
                    {!session ?
                        (
                            <Button
                                variant='contained'
                                sx={{ width: '270px', fontSize: '16px' }}
                                onClick={() => dispatch(dialogOpen())}
                            >
                                Log In
                            </Button>
                        )
                        : (
                            <Button
                                variant='contained'
                                sx={{ width: '270px', fontSize: '16px' }}
                                onClick={() => signOut()}
                            >
                                Log Out
                            </Button>
                        )}
                </Box>
                {!session && <NextLink passHref href='/register'>
                    <Button variant='outlined' sx={{ width: '270px', fontSize: '16px' }}>
                        Join Us
                    </Button>
                </NextLink>}
            </Grid>
        </List>
    </>

}