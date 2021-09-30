import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProductCard from '../product-card/ProductCard'
import Box from '@mui/material/Box'
import styles from './sneakersPage.module.css'
import NoResults from './search/NoResults'

export default function SneakersSearchPage({ sneakers, title, q }) {
    return (
        <main>
            <Grid container className='page-container'>
                <Box mb={4} className='w-100'>
                    <Typography variant='h4' component='h1'>
                        {sneakers[0] ? title : `We're sorry. We couldn't find results for "${q}"`}
                    </Typography>
                </Box>
                <Grid className='w-100'>
                    {sneakers[0] && sneakers.map(sneaker => (
                        <Box key={sneaker._id} mb={4} className={styles.box}>
                            <ProductCard
                                name={sneaker.name}
                                id={sneaker._id}
                                imgUrl={sneaker.imgUrl}
                                price={sneaker.price}
                            />
                        </Box>
                    ))}
                    {!sneakers[0] && <NoResults />}
                </Grid>
            </Grid>
        </main>
    )
}