import Link from '@mui/material/Link'
import NextLink from 'next/link'
import Grid from '@mui/material/Grid';

export default function EzeLogo({ onClick }) {
    return (
        <Grid item xs={12} sm={3} xl={4} pr={1} mb={1}>
            <NextLink href='/' passHref>
                <Link variant='h6' noWrap color='black' underline='none' onClick={onClick}>
                    EzeSneakers
                </Link>
            </NextLink>
        </Grid>
    )
}