import Grid from '@mui/material/Grid'

export default function FooterContainer({ children }) {
    return (
        <footer style={{ marginTop: '30px' }}>
            <Grid container sx={{ backgroundColor: 'black', padding: '32px 32px 8px 32px' }} >
                <Grid container direction='column'>
                    {children}
                </Grid>
            </Grid>
        </footer>
    )
}