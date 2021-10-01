import Grid from '@mui/material/Grid'
import TextGrid from './TextGrid'
import ImageGrid from './ImageGrid'

export default function Section3() {
    return <section className='w-100'>
        <Grid container sx={{ height: { md: '100vh' } }} alignItems='center'>
            <TextGrid text='Our mission is to reduce the number of shoes thrown away' order={{ md: 2 }} />
            <ImageGrid
                imgUrl='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1405/v1632774416/ecom-portfolio/home-8.webp'
                height={1405}
                width={2104}
            />
        </Grid>
    </section>
}