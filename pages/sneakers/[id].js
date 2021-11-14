import { connectToDatabase } from '../../lib/mongodb'
import { ObjectId } from 'mongodb'
import Head from 'next/head'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SizesSelect from '../../src/components/ShowPage/SizesSelect/SizesSelect'
import ShouldBuyText from '../../src/components/ShowPage/ShouldBuyText'
import { useSelector } from 'react-redux'
import { selectSizeError } from '../../src/redux/slices/sizeErrorSlice'
import StyledRating from '../../src/components/ShowPage/StyledRating'
import AddFavorites from '../../src/components/ShowPage/AddFavorites'
import Image from 'next/image'
import { prepareImgUrl, createBlurDataUrl } from '../../src/helpers/imgHelpers'
import SizeError from '../../src/components/ShowPage/SizesSelect/SizeError'
import Tags from '../../src/components/ShowPage/Tags'
import AddToCartButton from '../../src/components/ShowPage/AddToCartButton'

export default function SneakerPage({ name, price, imgUrl, gender, tags, rating, description, sizes, _id }) {
    const sizeError = useSelector(selectSizeError)
    return (
        <>
            <Head>
                <title>{`${name} | EzeSneakers`}</title>
                <meta
                    name='description'
                    content={`${name} - this product is one of EzeSneakers restored shoes collection. 
                    Buy ${name} and enjoy saving our Planet by using restored shoes.`}
                />
            </Head>
            <Grid container className='page-container' justifyContent='center'>
                <Grid container item xl={8}>
                    <Grid item xs={12} md={7}>
                        <Image
                            src={prepareImgUrl(imgUrl)}
                            quality={100}
                            width={1200}
                            height={1200}
                            alt={name}
                            title={name}
                            className='show-page-img'
                            placeholder='blur'
                            blurDataURL={createBlurDataUrl(imgUrl)}
                        />
                        <Box mb={1.5} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <ShouldBuyText />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ paddingLeft: { md: '16px' } }}>
                            <Typography variant='h3' component='h1'>
                                {name}
                            </Typography>
                            <Grid container>
                                <Typography variant='h4' component='h2' my={1} sx={{ fontFamily: '\'Roboto\', sans-serif' }} >
                                    {price} $
                                </Typography>
                                <Grid item xs={12}>
                                    <Box mb={1}>
                                        <StyledRating precision={0.1} defaultValue={rating} readOnly />
                                    </Box>
                                    <Tags tags={tags} gender={gender} />
                                </Grid>
                            </Grid>
                            <Typography color={sizeError ? 'error' : 'primary'}>
                                Choose size
                            </Typography>
                            <SizesSelect sizes={sizes} />
                            <SizeError error={sizeError} />
                            <AddToCartButton
                                name={name}
                                price={price}
                                gender={gender}
                                imgUrl={imgUrl}
                                tags={tags}
                                _id={_id}
                                sizes={sizes}

                            />
                            <AddFavorites id={_id} />
                            <Typography variant='h5' component='h2' gutterBottom>
                                Description
                            </Typography>
                            <Typography variant='body1' mb={1}>
                                {description}.
                            </Typography>
                            <Box mb={1} sx={{ display: { xs: 'block', md: 'none' } }}>
                                <ShouldBuyText />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export async function getStaticPaths() {
    const { db } = await connectToDatabase()
    const sneakersData = await db.collection('products').find({}).toArray()

    const sneakers = JSON.parse(JSON.stringify(sneakersData))

    const paths = sneakers.map(sneaker => {
        return {
            params: { id: sneaker._id }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { db } = await connectToDatabase()
    const sneakerData = await db.collection('products').findOne({ _id: ObjectId(params.id) })

    const checkAlsoData = await db.collection('products').aggregate([
        { $match: { rating: { $gte: 4.5 } } },
        { $sample: { size: 3 } }
    ]).toArray()

    const checkAlso = JSON.parse(JSON.stringify(checkAlsoData))
    const { name, price, imgUrl, gender, tags, rating, description, sizes, _id } = JSON.parse(JSON.stringify(sneakerData))

    return {
        props: {
            name,
            price,
            imgUrl,
            gender,
            tags,
            rating,
            description,
            sizes,
            checkAlso,
            _id
        }
    }
}