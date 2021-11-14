import { useSelector } from 'react-redux'
import { totalQty } from '../../../../helpers/navbarHelpers'
import Box from '@mui/material/Box'
import ShoppingCartBtn from './ShoppingCartBtn';
import UserAccountButton from '../RightSideMenu/UserAccountButton';
import { selectCartItems } from '../../../../redux/slices/cartSlice';
import FavoritesIcon from './FavoritesIcon';
import { selectFavoritesIds } from '../../../../redux/slices/favoritesSlice';

export default function NavIcons({ status }) {
    const cartItems = useSelector(selectCartItems)
    const favoritesIds = useSelector(selectFavoritesIds)
    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <FavoritesIcon status={status} favQty={favoritesIds.length} />
            <ShoppingCartBtn totalQty={totalQty(cartItems)} />
            <UserAccountButton status={status} />
        </Box>
    )
}