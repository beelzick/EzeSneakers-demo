import NextLink from 'next/link'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'
import useStyles from '../../../../helpers/navbarMUIstyles';


export default function ShoppingCartBtn({ totalQty }) {
    const classes = useStyles()

    return (
        <NextLink href='/cart' passHref>
            <IconButton color='inherit' aria-label='shopping cart' size="large">
                <Badge classes={{ badge: classes.customBadge }} badgeContent={totalQty} color='error'>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </NextLink>
    )
}