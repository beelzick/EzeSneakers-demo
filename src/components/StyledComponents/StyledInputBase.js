import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        WebkitTextFillColor: '#f7f7f7 !important',
        color: 'white'
    },
}));

export default StyledInputBase