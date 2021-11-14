import IconButton from '@mui/material/IconButton'
import MoreIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { NavbarContext } from '../../../Layout';


export default function MoreIconButton() {
    const { setMobileMoreAnchorEl } = useContext(NavbarContext)
    const handleClick = (e) => {
        setMobileMoreAnchorEl(e.currentTarget)
    }



    return (
        <IconButton
            aria-label='show more'
            aria-controls='menu-mobile'
            aria-haspopup='true'
            onClick={handleClick}
            color='inherit'
            size='large'
            sx={{ display: { sm: 'none' } }}
        >
            <MoreIcon />
        </IconButton>
    )
}