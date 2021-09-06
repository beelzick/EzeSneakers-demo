import Navbar from './navbar/Navbar'
import Footer from './Footer'
import styles from './layout.module.css'
import Grid from '@material-ui/core/Grid'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                {/* <Grid container className={styles.pageContainer}> */}
                    {children}
                {/* </Grid> */}
            </main>
            <Footer />
        </div>
    )
}