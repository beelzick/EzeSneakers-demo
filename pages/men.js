import { Grid, Typography, Box } from '@material-ui/core'
import { connectToDatabase } from '../lib/mongodb'
import ProductCard from '../components/ProductCard'

export default function Men({ sneakers }) {
    return <>
        <Grid item xs={12}>
            <Box my={4}>
                <Typography variant='h4' component='h1'>
                    For Men
                </Typography>
            </Box>
        </Grid>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            {sneakers.map(sneaker => <Box key={sneaker._id} mb={4}><ProductCard  imgUrl={sneaker.imgUrl} /></Box>)}
        </Grid>
    </>
}
export async function getStaticProps() {
    const { db } = await connectToDatabase()

    const sneakersData = await db.collection('products').aggregate([
        { $match: { sex: 'man' } },
        { $sort: { addDate: -1 } },
    ]).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))
    return {
        props: {
            sneakers
        }
    }
}


