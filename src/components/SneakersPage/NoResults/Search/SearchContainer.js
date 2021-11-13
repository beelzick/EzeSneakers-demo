import styles from './Search.module.css'

export default function SearchContainer({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                {children}
            </div>
        </div>
    )
}