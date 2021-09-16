import styles from './footer.module.css'

export default function Footer() {
    return <footer className={styles.foot}>
        <p>&copy; EzeSneakers {new Date().getFullYear()}</p>
    </footer>
}