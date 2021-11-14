import styles from './SizesSelect.module.css'
import Typography from '@mui/material/Typography'

export default function SizeError({ error }) {
    return (
        <div my={1} className={styles.errorContainer}>
            {error && (
                <Typography color='error'>
                    Choose size
                </Typography>
            )}
        </div>
    )
}