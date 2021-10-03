import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import NextLink from 'next/link'
import styles from './navbar.module.css'

export default function NavLink() {
    return (
        <Box className={styles['nav-links']}>
            <NextLink href='/sneakers/men' passHref>
                <Button size='large' color='inherit'>men</Button>
            </NextLink>
            <NextLink href='/sneakers/women' passHref>
                <Button size='large' color='inherit'>women</Button>
            </NextLink>
            <NextLink href='/sneakers/new' passHref>
                <Button size='large' color='inherit'>new</Button>
            </NextLink>
            <NextLink href='/sneakers/summer' passHref>
                <Button size='large' color='inherit'>summer</Button>
            </NextLink>
            <NextLink href='/sneakers' passHref>
                <Button size='large' color='inherit'>All</Button>
            </NextLink>
        </Box>
    )
}