import styles from './sizeRadio.module.css'
import { useState } from 'react'
import SizeRadio from './SizeRadio'
import { useDispatch, useSelector } from 'react-redux'
import { setSize } from '../../redux/slices/selectedSizeSlice'
import { selectSizeError, setSizeError } from '../../redux/slices/sizeErrorSlice'

export default function SizesSelect({ sizes }) {
    const [value, setValue] = useState(null)
    const dispatch = useDispatch()
    const sizeError = useSelector(selectSizeError)
    
    const handleSizeChange = (event) => {
        setValue(event.target.value)
        dispatch(setSize(event.target.value))
        if (sizeError) {
            dispatch(setSizeError(false))
        }
    }

    return (
        <div className={styles.radioToolbar} onChange={handleSizeChange} value={value}>
            {sizes.map(size => <SizeRadio key={size._id} size={size.size} qty={size.qty} />)}
        </div>
    )
}