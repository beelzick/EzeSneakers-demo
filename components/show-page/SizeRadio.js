import styles from './sizeRadio.module.css'

export default function SizeRadio({ size, qty }) {
    return (
        <div className={styles.sizeContainer}>
            <input disabled={!qty} type='radio' id={size} name='sizes' value={size} />
            <label htmlFor={size} >EU {size}</label>
        </div>
    )
}