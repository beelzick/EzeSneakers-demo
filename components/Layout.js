import Navbar from './navbar/Navbar'
import Footer from './Footer'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}