import Grid from '@mui/material/Grid'
import styles from './MenuContainer.module.css'
import { useDispatch } from 'react-redux'

export default function MenuContainer({ children, setMenuFunction, fixed }) {
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
            sx={fixed && {position: 'relative', top: 0}}
        >
            <Grid container item xs={7} className={styles.fadeContent}>
                {children}
            </Grid>
        </Grid>
    )
}