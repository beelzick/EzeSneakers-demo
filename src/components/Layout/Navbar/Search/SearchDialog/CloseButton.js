import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

export default function CloseButton({ onClick }) {
    return (
        <Grid
            item
            xs={1}
            md={2}
            mdlg2={2}
            lg={3}
            xl={4}
            container
            justifyContent='flex-end'
            sx={{ display: { xs: 'none', mdlg2: 'flex' } }}
        >
            <IconButton
                sx={{ marginTop: '-8px', marginRight: { xs: 'unset', md: '20px' } }}
                onClick={onClick}
            >
                <CloseIcon fontSize='large' sx={{ color: 'black' }} />
            </IconButton>
        </Grid>
    )
}