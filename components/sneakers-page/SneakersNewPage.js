import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ProductCard from '../product-card/ProductCard'
import Box from '@material-ui/core/Box'
import styles from './sneakersPage.module.css'

export default function SneakersNewPage({ sneakers, title }) {
    return (
        <Grid container className='page-container'>
            <Box mb={4} className='w100'>
                <Typography variant='h4' component='h1'>
                    {title}
                </Typography>
            </Box>
            <Grid className='w100'>
                {sneakers.map(sneaker => (
                    <Box key={sneaker._id} mb={4} className={styles.box}>
                        <ProductCard
                            name={sneaker.name}
                            id={sneaker._id}
                            imgUrl={sneaker.imgUrl}
                            price={sneaker.price}
                        />
                    </Box>
                ))}
            </Grid>
        </Grid>
    )
}