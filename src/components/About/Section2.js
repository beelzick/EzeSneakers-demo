import Grid from '@mui/material/Grid'
import ImageGrid from './ImageGrid'
import TextGrid from './TextGrid'

export default function Section2() {
    return (
        <section className='w-100'>
            <Grid container sx={{ height: { md: '100vh' } }} alignItems='center'>
                <TextGrid text='We want to give sneakers a second life, without compromising on their quality' />
                <ImageGrid
                    imgUrl='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1400/v1632773761/ecom-portfolio/home-7.webp'
                    width={1813}
                    height={2266}
                    alt='A pair of restored sneakers'
                />
            </Grid>
        </section>
    )
}