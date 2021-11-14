import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'
import { useState, createContext } from 'react';

export const NavbarContext = createContext({
    anchorEl: null,
    setAnchorEl: () => { },
    mobileMoreAnchorEl: null,
    setMobileMoreAnchorEl: () => { },
})

export default function Layout({ children }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

    const value = {
        anchorEl,
        setAnchorEl,
        mobileMoreAnchorEl,
        setMobileMoreAnchorEl
    }

    return (
        <div className={styles.container}>
            <NavbarContext.Provider value={value}>
                <Navbar />
            </NavbarContext.Provider>
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}