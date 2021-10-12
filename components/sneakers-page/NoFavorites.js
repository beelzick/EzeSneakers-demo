import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import NextImage from 'next/image'

export default function NoFavorites() {
    return (
        <Grid container justifyContent='center' direction='column' className='w-100' alignItems='center'>
            <NextImage
                width={350}
                height={350}
                src='https://res.cloudinary.com/dfvpybkta/image/upload/v1633972815/ecom-portfolio/cactus.png'
            />
            <Typography variant='h4' mt={3} align='center'>
                Your favorites section is empty
            </Typography>
            <Typography variant='h5' mt={2} align='center'>
                Click the heart icon on the right corner of a product card to add the sneaker to favorites
            </Typography>
        </Grid>
    )
}