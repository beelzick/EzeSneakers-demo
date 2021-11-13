import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'black',
    },
});

export default StyledRating