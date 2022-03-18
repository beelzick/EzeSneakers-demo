import AppBar from '@mui/material/AppBar';
import SmallNav from '../SmallNav/SmallNav';

export default function NavbarContainer({ children }) {
    return (
        <AppBar position='static'>
            <SmallNav />
            {children}
        </AppBar>
    )
}