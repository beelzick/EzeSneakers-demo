import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaFemale } from '@react-icons/all-files/fa/FaFemale'
import { FaMale } from '@react-icons/all-files/fa/FaMale'
import { MdFiberNew } from '@react-icons/all-files/Md/MdFiberNew'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { GiConverseShoe } from '@react-icons/all-files/gi/GiConverseShoe'
import NextLink from 'next/link'

export default function DrawerList() {
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
                    <ListItemIcon><GiConverseShoe fontSize='24' /></ListItemIcon>
                    <ListItemText primary='all sneakers' />
                </ListItem>
            </NextLink>
        </List>
    )
}