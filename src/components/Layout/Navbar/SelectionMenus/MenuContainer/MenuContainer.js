import Grid from '@mui/material/Grid'
import styles from './MenuContainer.module.css'
import { useDispatch } from 'react-redux'

export default function MenuContainer({ children, setMenuFunction }) {
    const dispatch = useDispatch()
    return (
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            p={3}
            className={styles.navDialog}
            onMouseEnter={() => dispatch(setMenuFunction(true))}
            onMouseLeave={() => dispatch(setMenuFunction(false))}
        >
            <Grid container item xs={7} className={styles.fadeContent}>
                {children}
            </Grid>
        </Grid>
    )
}