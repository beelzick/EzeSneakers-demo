import { Grid, Typography, Box } from '@material-ui/core'
import { connectToDatabase } from '../lib/mongodb'
import ProductCard from '../components/ProductCard'

export default function Favorites({ sneakers }) {
    return <>
        <Grid container className='page-container'>
            <Grid item xs={12}>
                <Box mb={4}>
                    <Typography variant='h4' component='h1'>
                        Favorites
                    </Typography>
                </Box>
            </Grid>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                {sneakers.map(sneaker => (
                    <Box key={sneaker._id} mb={4}>
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
    </>
}
export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { sex: 'man' } },
        { $sort: { addDate: -1 } },
    ]).limit(5).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}


