import Grid from '@mui/material/Grid'
import SearchSvg from '../../Svg/SearchSvg'

export default function SadSearchIcon() {
    return (
        <Grid item xs={12} md={6}>
            <Grid container alignItems='center' justifyContent='center'>
                <SearchSvg />
            </Grid>
        </Grid>
    )
}