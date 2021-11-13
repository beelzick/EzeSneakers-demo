import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function NavbarContainer({ children }) {
    return (
        <AppBar position='static'>
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>
    )
}