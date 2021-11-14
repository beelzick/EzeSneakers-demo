import { useContext } from 'react';
import { NavbarContext } from '../../Layout';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function UserAccountButton({ status }) {
    const { setAnchorEl } = useContext(NavbarContext)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    return (
        <>
            {status === 'authenticated' && (
                <IconButton
                    edge='end'
                    aria-label='account of current user'
                    aria-controls='account-menu'
                    aria-haspopup='true'
                    onClick={handleClick}
                    color='inherit'
                    size='large'>
                    <AccountCircle />
                </IconButton>
            )}
        </>
    )
}