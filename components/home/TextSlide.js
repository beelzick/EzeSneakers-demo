import Typography from '@mui/material/Typography';

export default function TextSlide({ text }) {
    return <Typography color='primary' align='center' component='h6' sx={{ fontWeight: 300, fontSize: '15px' }}>
        {text}
    </Typography>
}