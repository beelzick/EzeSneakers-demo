import NextLink from 'next/link'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from '../../../../helpers/navbarMUIstyles';

export default function FavoritesBtn({ favQty }) {
    const classes = useStyles()
    return (
        <NextLink href='/favorites' passHref>
            <IconButton color='inherit' aria-label='favorites' size='large' component='button'>
                <Badge classes={{ badge: classes.customBadge }} badgeContent={favQty} color='error'>
                    <FavoriteIcon />
                </Badge>
            </IconButton>
        </NextLink>
    )
}