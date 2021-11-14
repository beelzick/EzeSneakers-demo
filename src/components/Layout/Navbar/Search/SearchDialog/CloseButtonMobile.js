import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function CloseButtonMobile({ onClick }) {
    return (
        <>
            <div className='grow' />
            <Grid item container justifyContent='flex-end' sx={{ display: { mdlg2: 'none' } }}>
                <Button size='large' onClick={onClick} datatest-id='close-button'>
                    close
                </Button>
            </Grid>
        </>
    )
}