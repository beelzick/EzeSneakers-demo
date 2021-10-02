import styles from './size-radio.module.css'

export default function SizeRadio({ size, qty }) {
    return (
        <div className={styles['size-container']}>
            <input disabled={!qty} type='radio' id={size} name='sizes' value={size} />
            <label htmlFor={size} >EU {size}</label>
        </div>
    )
}