import Grid from '@mui/material/Grid'
import TextGrid from './TextGrid'
import ImageGrid from './ImageGrid'

export default function Section3() {
    return <section>

        <Grid container sx={{ height: '100vh' }} alignItems='center'>
            <ImageGrid imgUrl='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1405/v1632774416/ecom-portfolio/home-8.webp' />
            <TextGrid text='Our mission is to reduce the number of shoes thrown away' />
        </Grid>
    </section>
}