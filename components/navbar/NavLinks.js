import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import NextLink from 'next/link'

export default function NavLink() {
    return (
        <Box>
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