import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaFemale } from '@react-icons/all-files/fa/FaFemale'
import { FaMale } from '@react-icons/all-files/fa/FaMale'
import { MdFiberNew } from '@react-icons/all-files/Md/MdFiberNew'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { GiConverseShoe } from '@react-icons/all-files/gi/GiConverseShoe'
import NextLink from 'next/link'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { dialogOpen } from '../../../redux/slices/loginDialogSlice'
import { useDispatch } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';

export default function DrawerList() {
    const dispatch = useDispatch()
    const { data: session } = useSession()

    return (
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
                    <ListItemIcon><GiConverseShoe fontSize='24' style={{ marginLeft: '4px' }} /></ListItemIcon>
                    <ListItemText primary='all sneakers' />
                </ListItem>
            </NextLink>
            <Divider />
            <Grid container direction='column' alignItems='center'>
                <Box my={3}>
                    {!session ?
                        (
                            <Button
                                variant='contained'
                                size='small'
                                sx={{ width: '210px' }}
                                onClick={() => dispatch(dialogOpen())}
                            >
                                Log In
                            </Button>
                        )
                        : (
                            <Button
                                variant='contained'
                                size='small'
                                sx={{ width: '210px' }}
                                onClick={() => signOut()}
                            >
                                Log Out
                            </Button>
                        )}
                </Box>
                {!session && <NextLink passHref href='/register'>
                    <Button variant='outlined' size='small' sx={{ width: '210px' }}>
                        Register
                    </Button>
                </NextLink>}
            </Grid>
        </List>
    )
}