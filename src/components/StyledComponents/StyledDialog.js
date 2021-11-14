import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-container': {
        alignItems: 'flex-start',
    },
    '& .MuiDialog-paper': {
        margin: 'unset',
        width: '100%',
        maxWidth: 'unset',
        [theme.breakpoints.up('mdlg2')]: {
            minHeight: '260px',
        }
    }
}))

export default StyledDialog