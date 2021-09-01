import styles from './sizeRadio.module.css'
import SizeRadio from './SizeRadio'
export default function SizesSelect({ sizes }) {
    return (
        <div className={styles.radioToolbar}>
            {sizes.map(size => <SizeRadio key={size._id} size={size.size} qty={size.qty} />)}
        </div>
    )
}