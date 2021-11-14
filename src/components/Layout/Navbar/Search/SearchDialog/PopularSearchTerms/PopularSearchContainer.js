import Grid from '@mui/material/Grid';

export default function PopularSearchContainer({ children }) {
    return (
        <Grid item container direction='row' sx={{ marginTop: { xs: '12px', mdlg2: 'unset' } }}>
            <Grid item xs={12} mdlg2={3} xl={4} />
            <Grid
                container
                direction='column'
                item
                xs={12} sm={8} md={7} lg={6} xl={4}
                sx={{ zIndex: 0 }}
            >
                {children}
            </Grid>
        </Grid>
    )
}